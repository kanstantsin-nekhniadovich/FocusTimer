import React from 'react';
import { Task } from '@typings';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithRedux } from '../../../utils/renderWithRedux';

import { TaskTitleForm } from '../TaskTitleForm';
import * as actions from '../../../ducks/tasks/actions';

jest.mock('../../../ducks/tasks/actions');

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

describe('<TaskTitleForm />', () => {
  beforeEach(() => {
    jest.spyOn(actions, 'updateTaskRequest').mockImplementation(() => ({ type: 'tasks/UPDATE_TASKS_REQUEST', payload: { id: task.id } }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should correctly render component', () => {
    const { getByA11yLabel, getByText } = renderWithRedux(<TaskTitleForm task={task} />);
    const pressableContainer = getByA11yLabel('task-title-form');
    const submitButton = getByA11yLabel('Edit task title');
    const titleMask = getByText(task.title);

    expect(pressableContainer).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(titleMask).toBeDefined();
  });

  it('should show validation message if text title is empty', async () => {
    const { getByA11yLabel, getByPlaceholderText, queryByText, getByText } = renderWithRedux(<TaskTitleForm task={task} />);
    const pressableContainer = getByA11yLabel('task-title-form');

    fireEvent.press(pressableContainer);

    await waitFor(() => {
      const textInput = getByPlaceholderText('Task title');
      fireEvent.changeText(textInput, '');
    });

    const submitButton = getByA11yLabel('Edit task title');

    expect(queryByText(task.title)).toBeNull();

    fireEvent.press(submitButton);
    await waitFor(() => expect(actions.updateTaskRequest).not.toHaveBeenCalled());
    await waitFor(() => expect(getByText('Please enter your title')).toBeDefined());
  });

  it('should hide validation message after user starts typing', async () => {
    const { getByA11yLabel, getByPlaceholderText, queryByText } = renderWithRedux(<TaskTitleForm task={task} />);
    const pressableContainer = getByA11yLabel('task-title-form');

    fireEvent.press(pressableContainer);

    await waitFor(() => {
      const textInput = getByPlaceholderText('Task title');
      fireEvent.changeText(textInput, '');
    });

    const submitButton = getByA11yLabel('Edit task title');

    fireEvent.press(submitButton);
    await waitFor(() => expect(queryByText('Please enter your title')).toBeDefined());

    await waitFor(() => {
      const textInput = getByPlaceholderText('Task title');
      fireEvent.changeText(textInput, 'a');
    });

    await waitFor(() => expect(queryByText('Please enter your title')).toBeNull());
  });

  it('should not fire updateTaskRequest action if text title was not changed', async () => {
    const { getByA11yLabel } = renderWithRedux(<TaskTitleForm task={task} />);
    const pressableContainer = getByA11yLabel('task-title-form');

    fireEvent.press(pressableContainer);

    const submitButton = getByA11yLabel('Edit task title');

    fireEvent.press(submitButton);
    await waitFor(() => expect(actions.updateTaskRequest).not.toHaveBeenCalled());
  });

  it('should fire updateTaskRequest action', async () => {
    const newTaskTitle = 'New task title';
    const { getByA11yLabel, getByPlaceholderText } = renderWithRedux(<TaskTitleForm task={task} />);
    const pressableContainer = getByA11yLabel('task-title-form');

    fireEvent.press(pressableContainer);

    await waitFor(() => {
      const textInput = getByPlaceholderText('Task title');
      fireEvent.changeText(textInput, newTaskTitle);
    });

    const submitButton = getByA11yLabel('Edit task title');

    fireEvent.press(submitButton);
    await waitFor(() => expect(actions.updateTaskRequest).toHaveBeenCalledWith({ id: task.id, title: newTaskTitle }));
  });
});
