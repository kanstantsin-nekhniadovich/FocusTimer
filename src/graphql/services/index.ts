import * as authService from './auth';
import * as userService from './user';
import * as projectsService from './projects';

export const services = {
  authService,
  userService,
  projectsService,
};

export type Services = typeof services;
