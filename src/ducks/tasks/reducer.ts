import { Task } from '@typings';
import { createReducer } from 'typesafe-actions';

import { fetchProjectsSuccess } from '../projects';

interface State {
  tasks: Record<Id, Task>;
  isLoading: boolean;
}

const initialState: State = {
  tasks: {},
  isLoading: false,
};

export const handleSetTasks: ActionHandler<State, typeof fetchProjectsSuccess> = (state, action) => {
  const tasks = action.payload.reduce((acc, current) => ({ ...acc, [current.id]: [...current.tasks] }), {});

  return { ...state, tasks };
};

export const tasksReducer = createReducer(initialState)
  .handleAction(fetchProjectsSuccess, handleSetTasks);
