import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { getItem } from '../services/storage';
import { isDefined } from '../utils/isDefined';

const httpLink = new HttpLink({ uri: Constants.manifest.extra.api });

const authLink = setContext(async (_, { headers }) => {
  const token = await getItem('token');

  return {
    headers: {
      ...headers,
      authorization: isDefined(token) ? `Bearer ${token}` : null,
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: authLink.concat(httpLink),
});
