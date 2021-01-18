import { User } from '@typings';

export const getIsUserLoading = (state: Store): boolean => state.auth.isLoading;
export const getUser = (state: Store): User => state.auth.user;
