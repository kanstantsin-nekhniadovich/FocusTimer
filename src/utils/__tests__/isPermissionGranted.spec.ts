import { PermissionResponse, PermissionStatus } from 'expo-permissions';

import { isPermissionGranted } from '../isPermissionsGranted';

describe('isPermissionGranted', () => {
  it('permissions should be granted', () => {
    const permissionResponse: PermissionResponse = {
      status: PermissionStatus.GRANTED,
      expires: 'never',
      granted: true,
      canAskAgain: false,
      permissions: {},
    };

    const isGranted = isPermissionGranted(permissionResponse);

    expect(isGranted).toBeTruthy();
  });

  it('permissions should be denied', () => {
    const permissionResponse: PermissionResponse = {
      status: PermissionStatus.DENIED,
      expires: 'never',
      granted: false,
      canAskAgain: false,
      permissions: {},
    };

    const isGranted = isPermissionGranted(permissionResponse);

    expect(isGranted).toBeFalsy();
  });

  it('permissions should be undetermined', () => {
    const permissionResponse: PermissionResponse = {
      status: PermissionStatus.UNDETERMINED,
      expires: 'never',
      granted: false,
      canAskAgain: false,
      permissions: {},
    };

    const isGranted = isPermissionGranted(permissionResponse);

    expect(isGranted).toBeFalsy();
  });
});
