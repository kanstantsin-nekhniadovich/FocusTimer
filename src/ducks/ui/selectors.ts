export const getIsErrorAlertShown = (store: Store): boolean => store.ui.isErrorAlertShown;
export const getErrorMessage = (store: Store): Nullable<string> => store.ui.errorMessage;