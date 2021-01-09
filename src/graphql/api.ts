import { Response } from '@typings';
import { ApolloQueryResult, FetchResult, MutationOptions, QueryOptions } from '@apollo/client';
import { client } from './client';

export enum Status {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

type ClientResultType = FetchResult<Unrestricted> | ApolloQueryResult<Unrestricted>;

const normalize = <T, P>(handle: (options: P) => Promise<ClientResultType>):
  (options: P, property: string) => Promise<NormalizedResponse<T>> => async (options: P, property: string): Promise<NormalizedResponse<T>> => {
    try {
      const response = await handle(options);

      return {
        status: Status.SUCCESS,
        data: response.data[property],
        error: null,
      };
    } catch (error) {
      return {
        status: Status.FAILURE,
        data: null,
        error: error.message,
      };
    }
  };

const mutate = <T extends Response.All>(options: MutationOptions, property: string): Promise<NormalizedResponse<T>> => {
  return normalize<T, MutationOptions>(client.mutate)(options, property);
};

const query = <T extends Response.All>(options: QueryOptions, property: string): Promise<NormalizedResponse<T>> => {
  return normalize<T, QueryOptions>(client.query)(options, property);
};

export const api = {
  query,
  mutate,
};
