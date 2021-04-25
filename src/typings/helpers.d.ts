declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Unrestricted = any;
  export type Nullable<T> = null | T;
  export type Maybe<T> = null | undefined | T;
  export type EmptyArray = never[];
  export type EmptyObject = Record<string, never>;
  export type EmptyString = '';
  export type PropType<T, K extends keyof T> = T[K];
}

export {};
