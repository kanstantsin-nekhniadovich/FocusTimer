import { Status } from '../graphql/api';

export const handleResponse = <T>(response: NormalizedResponse<T>) =>
  <S, F>(successHandler: (res: SuccessResponse<T>) => S, failureHandler: (res: FailureResponse) => F) => {
    if (response.status === Status.SUCCESS) {
      return successHandler(response);
    }

    return failureHandler(response);
  };
