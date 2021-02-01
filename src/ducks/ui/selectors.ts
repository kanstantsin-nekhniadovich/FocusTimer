export const getIsErrorAlertShown = (store: Store): boolean => store.ui.isErrorAlertShown;
export const getErrorMessage = (store: Store): Nullable<string> => store.ui.errorMessage;
export const getIsUserSkippedLoginFlow = (store: Store): boolean => store.ui.isUserSkippedLoginFlow;
export const getIsApplicationInited = (store: Store): boolean => store.ui.isApplicationInited;
