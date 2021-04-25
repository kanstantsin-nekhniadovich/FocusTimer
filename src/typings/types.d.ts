export type Alert = 'success' | 'error';

export type Status = 'TODO' | 'INPROGRESS' | 'COMPLETED';

export interface AlertMeta {
  isVisible: boolean;
  type: Alert;
  message: string;
}

export interface User {
  id: Id;
  name: string;
  email: string;
  avatarUrl: Nullable<string>;
}

export interface Project {
  id: Id;
  title: string;
  status: Status;
  note: string;
}

export interface FullProject extends Project {
  tasks: Task[];
}

export interface Task {
  id: Id;
  title: string;
  cyclesCount: number;
  workTime: number;
  breakTime: number;
  status: Status;
  remainingTime: number;
  currentCycle: number;
}

export interface TaskPayload {
  data: Omit<Task, 'id'>;
  projectId: Id;
}
