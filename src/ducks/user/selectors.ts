import { User } from '@typings';

export const getUser = (store: Store): User => store.user.user;
export const getIsUserLoading = (store: Store): boolean => store.user.isLoading;
