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
