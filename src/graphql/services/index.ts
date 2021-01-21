import * as authService from './auth';
import * as userService from './user';

export const services = {
  authService,
  userService,
};

export type Services = typeof services;
