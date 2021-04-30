import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { setNavigator } from './src/navigationRef';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import { createStackNavigator } from 'react-navigation-stack';
import PacientListScreen from './src/screens/PacientListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PacientCreateScreen from './src/screens/PacientCreateScreen';
import PacientDetailScreen from './src/screens/PacientDetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Provider as PacientProvider } from './src/context/PacientContext'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider as LocationProvider } from './src/context/LocationContext';

const trackListFlow =  createStackNavigator({
  TrackList: PacientListScreen, //TrackList = PacientList
  TrackDetail: PacientDetailScreen, //TrackDetail = PacientDetail
});

const loginFlow = createStackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen,
},
{
  initialRouteName: 'Signin',
}
);

const mainFlow = createBottomTabNavigator({
  trackListFlow,
  TrackCreate: PacientCreateScreen, //TrackCreate = PacientCreate
  Account: AccountScreen,
},
{
  tabBarOptions: {
    style: {
      borderWidth: 0,
      backgroundColor: '#003f5c',
    },
  }
});

trackListFlow.navigationOptions = () => {
  return {
    title: 'Pacienti',
    tabBarIcon: <FontAwesome name="th-list" size={27} color='#fb5b5a' />
  }
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow,
  mainFlow,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <PacientProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <App
              ref={(navigator) => {
                setNavigator(navigator);
              }}
            />
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </PacientProvider>
  );
};
