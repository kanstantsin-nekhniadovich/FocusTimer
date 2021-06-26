import fetch from 'cross-fetch';
import { Response } from '@typings';
import Constants from 'expo-constants';
import { GraphQLClient } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';

import { ResponseStatus } from '../utils/constants';
import { isDefined } from '../utils/isDefined';

const client = new GraphQLClient(Constants.manifest.extra.api, { fetch });

interface Options {
  document: RequestDocument;
  variables?: Variables;
}

export const request = async <T extends Response.All>(options: Options, property: string): Promise<NormalizedResponse<T>> => {
  const { document, variables } = options;

  try {
    const response = await client.request(document, variables);

    return {
      data: response[property],
      error: null,
      status: ResponseStatus.SUCCESS,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message,
      status: ResponseStatus.FAILURE,
    };
  }
};

export const setAuthorizationHeader = (token: Nullable<string>) => {
  client.setHeader('authorization', isDefined(token) ? `Bearer ${token}` : '');
};
