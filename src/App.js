import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// navigation
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';

// Context
import {AuthContext} from './contexts/AuthContext';

const RootStack = createStackNavigator();

export default function () {
  const auth = useMemo(() => ({
    login: (email, password) => {
      console.log('login', email, password);
    },
    logout: () => {
      console.log('logout');
    },
    register: (email, password) => {
      console.log('register', email, password);
    },
  }));

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
