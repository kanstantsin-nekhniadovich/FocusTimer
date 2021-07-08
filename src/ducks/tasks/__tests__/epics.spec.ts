import { Task } from '@typings';

import * as actions from '../actions';
import { showAlert } from '../../ui/actions';
import { createTasksEpic, deleteTaskEpic, updateTaskEpic } from '../epics';
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

describe('Tasks epics', () => {
  describe('createTasksEpic', () => {
    it('should dispatch success action after creating task', (done: jest.DoneCallback) => {
      const tasksService = {
        deleteTask: jest.fn(),
        fetchTasks: jest.fn(),
        createTask: jest.fn(async () => await Promise.resolve(successResponse)),
        updateTask: jest.fn(),
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
        deleteTask: jest.fn(),
        fetchTasks: jest.fn(),
        createTask: jest.fn(async () => await Promise.resolve(failureResponse)),
        updateTask: jest.fn(),
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

  describe('updateTaskEpic', () => {
    it('should successfully update task', (done: jest.DoneCallback) => {
      const tasksService = {
        deleteTask: jest.fn(),
        fetchTasks: jest.fn(),
        createTask: jest.fn(),
        updateTask: jest.fn(async () => await Promise.resolve(successResponse)),
      };

      const expectedActions = [actions.updateTaskSuccess(task)];

      const epicTestRunner = testEpic({
        epic: updateTaskEpic,
        count: expectedActions.length,
        actionsToInvoke: [actions.updateTaskRequest(task)],
        state: { ...state, tasks: { [task.projectId]: [task] } },
        dependencies: {
          tasksService,
        },
      });

      epicTestRunner((actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      });
    });

    it('should fail to update task', (done: jest.DoneCallback) => {
      const tasksService = {
        deleteTask: jest.fn(),
        fetchTasks: jest.fn(),
        createTask: jest.fn(),
        updateTask: jest.fn(async () => await Promise.resolve(failureResponse)),
      };

      const expectedActions = [showAlert({ message: '', type: 'error' }), actions.updateTaskFailure()];

      const epicTestRunner = testEpic({
        epic: updateTaskEpic,
        count: expectedActions.length,
        actionsToInvoke: [actions.updateTaskRequest(task)],
        state: { ...state, tasks: { [task.projectId]: [task] } },
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

  describe('deleteTaskEpic', () => {
    it('should successfully remove task', (done: jest.DoneCallback) => {
      const tasksService = {
        deleteTask: jest.fn(async () => await Promise.resolve(successResponse)),
        fetchTasks: jest.fn(),
        createTask: jest.fn(),
        updateTask: jest.fn(),
      };

      const expectedActions = [actions.deleteTaskSuccess(task)];

      const epicTestRunner = testEpic({
        epic: deleteTaskEpic,
        count: expectedActions.length,
        actionsToInvoke: [actions.deleteTaskRequest(task.id)],
        state: { ...state, tasks: { [task.projectId]: [task] } },
        dependencies: {
          tasksService,
        },
      });

      epicTestRunner((actions) => {
        expect(actions).toEqual(expectedActions);
        done();
      });
    });

    it('should fail to remove task', (done: jest.DoneCallback) => {
      const tasksService = {
        deleteTask: jest.fn(async () => await Promise.resolve(failureResponse)),
        fetchTasks: jest.fn(),
        createTask: jest.fn(),
        updateTask: jest.fn(),
      };

      const expectedActions = [showAlert({ message: '', type: 'error' }), actions.deleteTaskFailure()];

      const epicTestRunner = testEpic({
        epic: deleteTaskEpic,
        count: expectedActions.length,
        actionsToInvoke: [actions.deleteTaskRequest(task.id)],
        state: { ...state, tasks: { [task.projectId]: [task] } },
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
});
