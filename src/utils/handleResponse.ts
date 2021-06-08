import { ResponseStatus } from '../utils/constants';

export const handleResponse = <T>(response: NormalizedResponse<T>) =>
  <S, F>(successHandler: (res: SuccessResponse<T>) => S, failureHandler: (res: FailureResponse) => F) => {
    if (response.status === ResponseStatus.SUCCESS) {
      return successHandler(response);
    }

    return failureHandler(response);
  };
