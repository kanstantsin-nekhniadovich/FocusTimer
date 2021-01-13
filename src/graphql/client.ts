import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  uri: Constants.manifest.extra.api,
});
