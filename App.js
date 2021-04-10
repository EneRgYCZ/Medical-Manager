import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as TrackProvider } from './src/context/TrackContext'
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import PacientCreateScreen from './src/screens/PacientCreateScreen';
import PacientDetailScreen from './src/screens/PacientDetailScreen';
import PacientListScreen from './src/screens/PacientListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow =  createStackNavigator({
  TrackList: PacientListScreen, //TrackList = PacientList
  TrackDetail: PacientDetailScreen, //TrackDetail = PacientDetail
})

trackListFlow.navigationOptions = () => {
  return {
    title : 'Pacienti',
    tabBarIcon: <FontAwesome name = "th-list" size = {27} />
  }
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: PacientCreateScreen, //TrackCreate = PacientCreate
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
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
  );
};
