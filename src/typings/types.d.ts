export type Status = 'TODO' | 'INPROGRESS' | 'COMPLETED';

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
  owner: User;
}
