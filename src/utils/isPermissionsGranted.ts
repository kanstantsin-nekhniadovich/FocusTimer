import { PermissionResponse, PermissionStatus } from 'expo-permissions';

import { isDefined } from './isDefined';

export const isPermissionGranted = (permission?: PermissionResponse): boolean => {
  return isDefined(permission) && permission.status === PermissionStatus.GRANTED;
};
