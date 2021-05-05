import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case 'fetch_user':
      return action.payload; 
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("PacientList");
  } else {
    navigate("Signin");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password, firstName, lastName, address, phoneNumber }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password, firstName, lastName, address, phoneNumber });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("PacientList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("PacientList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

const fetchUser = dispatch => async () => {

  const token = await AsyncStorage.getItem("token");

  const headers = {
    'Authorization': token, 
    'Content-Type': 'application/json'
  }

  const response = await trackerApi.get("/users", { headers: headers })

  dispatch({ type: 'fetch_user', payload: response.data })
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin, fetchUser },
  { token: null, errorMessage: "" }
);