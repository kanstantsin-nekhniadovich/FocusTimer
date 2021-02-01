import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { getIsUserSkippedLoginFlow } from './ducks';
import { Home, Login, Account, SignUp, Projects } from './screens';
import { Routes } from './routes';

const Stack = createStackNavigator<Screens>();

const commonNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export const Navigator: React.FC = () => {
  const isUserSkippedLoginFlow = useSelector(getIsUserSkippedLoginFlow);
  const initialRouteName = isUserSkippedLoginFlow ? Routes.Projects : Routes.Login;

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name={Routes.Home} component={Home} options={{
        title: 'My projects',
        ...commonNavigationOptions
      }} />
      <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.Account} component={Account} options={{ title: '', ...commonNavigationOptions }} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ title: 'Sign Up', ...commonNavigationOptions }} />
      <Stack.Screen name={Routes.Projects} component={Projects} options={{ title: 'My Projects', ...commonNavigationOptions }} />
    </Stack.Navigator>
  );
};
