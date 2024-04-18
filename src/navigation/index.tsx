import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from 'src/feature/login/screens';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignInScreen} />
    </Navigator>
  );
};

export default Navigation;
