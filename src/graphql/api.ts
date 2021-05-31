import { Response } from '@typings';
import { ApolloQueryResult, FetchResult, MutationOptions, QueryOptions } from '@apollo/client';
import { client } from './client';
import { ResponseStatus } from '../utils/constants';

type ClientResultType = FetchResult<Unrestricted> | ApolloQueryResult<Unrestricted>;

const normalize = <T, P>(handler: (options: P) => Promise<ClientResultType>): (options: P, property: string) =>
Promise<NormalizedResponse<T>> => async (options: P, property: string): Promise<NormalizedResponse<T>> => {
    try {
      const response = await handler(options);

      return {
        data: response.data[property],
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

const mutate = async <T extends Response.All>(options: MutationOptions, property: string): Promise<NormalizedResponse<T>> => {
  return await normalize<T, MutationOptions>(client.mutate)(options, property);
};

const query = async <T extends Response.All>(options: QueryOptions, property: string): Promise<NormalizedResponse<T>> => {
  return await normalize<T, QueryOptions>(client.query)(options, property);
};

export const api = {
  mutate,
  query,
};
