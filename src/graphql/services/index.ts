import * as authService from './auth';
import * as userService from './user';
import * as projectsService from './projects';
import * as tasksService from './tasks';

export const services = {
  authService,
  userService,
  projectsService,
  tasksService,
};

export type Services = typeof services;
