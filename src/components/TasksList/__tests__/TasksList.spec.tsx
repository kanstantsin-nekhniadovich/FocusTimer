import React from 'react';
import { render } from '@testing-library/react-native';

import { TasksList } from '..';
import { Status } from '../../../utils/constants';

describe('<TasksList />', () => {
  it('should render TasksList component with task in TODO', () => {
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

    const { toJSON } = render(<TasksList tasks={tasks}/>);

    expect(toJSON()).toMatchSnapshot();
  });
});
