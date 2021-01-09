import { Status } from '../graphql/api';

export const handleResponse = <T>(response: NormalizedResponse<T>) =>
  (successHandler: (res: SuccessResponse<T>) => AppActions, failureHandler: (res: FailureResponse) => AppActions): AppActions => {
    if (response.status === Status.SUCCESS) {
      return successHandler(response);
    }

    return failureHandler(response);
  };
