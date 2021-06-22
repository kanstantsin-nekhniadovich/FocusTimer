import React from 'react';

import { TasksList } from '..';
import { Status } from '../../../utils/constants';
import { renderWithRedux } from '../../../utils/renderWithRedux';
import { formatMillisecondsToMinutes } from '../../../utils/date';

describe('<TasksList />', () => {
  it('should render TasksList component with 3 tasks', () => {
    const tasks = [{
      id: '1',
      title: 'Test task',
      cyclesCount: 1,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.TODO,
      remainingTime: 1500000,
      currentCycle: 1,
      projectId: '1',
    },
    {
      id: '2',
      title: 'Second task',
      cyclesCount: 2,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.INPROGRESS,
      remainingTime: 200000,
      currentCycle: 2,
      projectId: '1',
    },
    {
      id: '3',
      title: 'Third task',
      cyclesCount: 4,
      workTime: 1500000,
      breakTime: 20000,
      status: Status.COMPLETED,
      remainingTime: 0,
      currentCycle: 1,
      projectId: '1',
    }];

    const { getByText, toJSON } = renderWithRedux(<TasksList tasks={tasks}/>);
    const remainingTime = formatMillisecondsToMinutes(tasks[1].remainingTime);

    expect(getByText('My tasks')).toBeDefined();
    expect(getByText('Test task')).toBeDefined();
    expect(getByText('Second task')).toBeDefined();
    expect(getByText('Third task')).toBeDefined();
    expect(getByText('New Task')).toBeDefined();
    expect(getByText(remainingTime)).toBeDefined();

    expect(toJSON()).toMatchSnapshot();
  });
});
