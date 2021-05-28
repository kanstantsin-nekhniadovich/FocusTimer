import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

interface Options {
  epic: AppEpic;
  count: number;
  actionsToInvoke: AppActions[];
  state?: Record<Unrestricted, Unrestricted>;
  dependencies?: Partial<Services>;
}

const commonDependencies = {
  authService: {} as Unrestricted,
  userService: {} as Unrestricted,
  projectsService: {} as Unrestricted,
  tasksService: {} as Unrestricted,
};

export const testEpic = (options: Options) => (callback: (actions: AppActions[]) => void) => {
  const { epic, count, actionsToInvoke, state = {}, dependencies = {} } = options;
  const subject = new Subject<AppActions>();
  const actionsSubject$ = new ActionsObservable(subject);
  const store = of(state) as StateObservable<Unrestricted>;

  epic(actionsSubject$, store, { ...commonDependencies, ...dependencies })
    .pipe(
      take(count),
      toArray(),
    ).subscribe(callback);

  actionsToInvoke.map(act => subject.next(act));
};
