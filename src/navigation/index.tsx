import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from 'src/feature/login/navigation';

export type RootStackParamList = {
  Login: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={LoginStack} />
    </Navigator>
  );
};

export default Navigation;
