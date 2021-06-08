import { Task } from '@typings';

import * as actions from '../actions';
import { showAlert } from '../../ui/actions';
import { createTasksEpic } from '../epics';
import { ResponseStatus } from '../../../utils/constants';
import { testEpic } from '../../../utils/testEpics';

export const task: Task = {
  id: '12312',
  title: 'Test task',
  cyclesCount: 4,
  workTime: 1500000,
  breakTime: 300000,
  status: 'TODO',
  remainingTime: 1500000,
  currentCycle: 1,
  projectId: 'test-project-id',
};

export const payload = {
  title: 'Test task',
  cyclesCount: 4,
  workTime: 1500000,
  breakTime: 300000,
  project: {
    id: 'test-project-id'
  },
};

const state = {
  tasks: {},
  isLoading: false,
};

export const successResponse: SuccessResponse<Task> = {
  data: task,
  error: null,
  status: ResponseStatus.SUCCESS,
};

export const failureResponse: FailureResponse = {
  data: null,
  error: '',
  status: ResponseStatus.FAILURE,
};

describe('createTasksEpic', () => {
  it('should dispatch success action after creating task', (done: jest.DoneCallback) => {
    const tasksService = {
      fetchTasks: jest.fn() as Unrestricted,
      createTask: jest.fn(async () => await Promise.resolve(successResponse)),
    };

    const expectedActions = [actions.createTaskSuccess(task)];

    const epicTestRunner = testEpic({
      epic: createTasksEpic,
      count: expectedActions.length,
      actionsToInvoke: [actions.createTaskRequest(payload)],
      state,
      dependencies: {
        tasksService,
      },
    });

    epicTestRunner((actions) => {
      expect(actions).toEqual(expectedActions);
      done();
    });
  });

  it('should dispatch failure action after try to create task', (done: jest.DoneCallback) => {
    const tasksService = {
      fetchTasks: jest.fn() as Unrestricted,
      createTask: jest.fn(async () => await Promise.resolve(failureResponse)),
    };

    const expectedActions = [showAlert({ message: '', type: 'error' }), actions.createTaskFailure()];

    const epicTestRunner = testEpic({
      epic: createTasksEpic,
      count: expectedActions.length,
      actionsToInvoke: [actions.createTaskRequest(payload)],
      state,
      dependencies: {
        tasksService,
      },
    });

    epicTestRunner((actions) => {
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
