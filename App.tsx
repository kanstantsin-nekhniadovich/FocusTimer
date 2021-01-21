import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Common } from '@styles';
import firebase from 'firebase';

import { store } from './src/store';
import { initializeFirebase } from './src/services/firebase';
import { AppReady } from './src/components/AppReady';
import { Navigator } from './src/Navigator';

export default function App(): JSX.Element {
  React.useEffect(() => {
    if (firebase.apps.length !== 0) {
      return;
    }

    initializeFirebase();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppReady>
          <SafeAreaView style={Common.container}>
            <Navigator />
          </SafeAreaView>
        </AppReady>
      </Provider>
    </NavigationContainer>
  );
}
