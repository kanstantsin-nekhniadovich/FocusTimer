import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Common } from '@styles';

import { store } from './src/store';
import { AppReady } from './src/components/AppReady';
import { Navigator } from './src/Navigator';
import { ErrorAlert } from './src/components/common';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppReady>
          <SafeAreaView style={Common.container}>
            <Navigator />
            <ErrorAlert />
          </SafeAreaView>
        </AppReady>
      </Provider>
    </NavigationContainer>
  );
}
