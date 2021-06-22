import React from 'react';

import { TaskItem } from '../TaskItem';
import { Status } from '../../../utils/constants';
import { renderWithRedux } from '../../../utils/renderWithRedux';
import { formatMillisecondsToMinutes } from '../../../utils/date';

describe('<TaskItem />', () => {
  it('should render TaskItem component with task in TODO', () => {
    const task = {
      id: '123',
      title: 'Test task',
      cyclesCount: 2,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.TODO,
      remainingTime: 1500000,
      currentCycle: 1,
      projectId: '1',
    };

    const { getByText } = renderWithRedux(<TaskItem task={task} />);
    expect(getByText(task.title)).toBeDefined();
    expect(getByText('New Task')).toBeDefined();
  });

  it('should render TaskItem component with task in INPROGRESS', () => {
    const task = {
      id: '123',
      title: 'Test task',
      cyclesCount: 2,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.INPROGRESS,
      remainingTime: 500000,
      currentCycle: 1,
      projectId: '2',
    };

    const { getByText } = renderWithRedux(<TaskItem task={task}/>);

    expect(getByText(task.title)).toBeDefined();
    expect(getByText(formatMillisecondsToMinutes(task.remainingTime))).toBeDefined();
  });

  it('should render TaskItem component with COMPLETED task', () => {
    const task = {
      id: '123',
      title: 'Test task',
      cyclesCount: 2,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.COMPLETED,
      remainingTime: 0,
      currentCycle: 1,
      projectId: '2',
    };

    const { getByText } = renderWithRedux(<TaskItem task={task}/>);

    expect(getByText(task.title)).toBeDefined();
  });
});
