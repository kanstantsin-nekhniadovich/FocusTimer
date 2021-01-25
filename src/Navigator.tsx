import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { Home, Login, Account, SignUp } from './screens';
import { Routes } from './routes';

const Stack = createStackNavigator<Screens>();

const commonNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export const Navigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} options={{
        title: 'My projects',
        ...commonNavigationOptions
      }} />
      <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.Account} component={Account} options={{ title: '', ...commonNavigationOptions }} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ title: 'Sign Up', ...commonNavigationOptions }} />
    </Stack.Navigator>
  );
};
