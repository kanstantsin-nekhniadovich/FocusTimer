import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Common } from '@styles';

import { store } from './src/store';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { AppReady } from './src/components/AppReady';

export type StackNavigationScreens = {
  Home: undefined,
  Login: undefined,
}

const Stack = createStackNavigator<StackNavigationScreens>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppReady>
          <SafeAreaView style={Common.container}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{
                title: 'My projects',
              }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </SafeAreaView>
        </AppReady>
      </Provider>
    </NavigationContainer>
  );
}
