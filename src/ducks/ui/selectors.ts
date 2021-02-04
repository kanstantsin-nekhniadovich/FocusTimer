import { AlertMeta } from '@typings';

export const getAlertMeta = (store: Store): AlertMeta => store.ui.alert;
export const getIsUserSkippedLoginFlow = (store: Store): boolean => store.ui.isUserSkippedLoginFlow;
export const getIsApplicationInited = (store: Store): boolean => store.ui.isApplicationInited;
