import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {LoginScreen} from '../screens/LoginScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';

const AuthStack = createStackNavigator();

const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Login'}>
        {() => (
          <LoginStack.Navigator
            mode={'modal'}
            name={'LoginStack'}
            screenOptions={{headerShown: false}}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
