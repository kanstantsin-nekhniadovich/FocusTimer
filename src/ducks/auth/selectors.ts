export const getToken = (store: Store): Nullable<string> => store.auth.token; 
export const getIsFacebookAuth = (store: Store): boolean => store.auth.isFacebookAuth; 
