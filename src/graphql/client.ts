import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

export const client = new ApolloClient({
  uri: Constants.manifest.extra.api,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
