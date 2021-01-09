declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Unrestricted = any;
  export type Nullable<T> = null | T;
  export type Maybe<T> = null | undefined | T;
}

export {};
