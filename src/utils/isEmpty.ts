export const isEmpty = <T extends string | Record<string, unknown> | any[]>(candidate: T | '' | EmptyArray | EmptyObject):
  candidate is ReturnType<T> => {
  return (typeof candidate === 'string')
    ? candidate === ''
    : Array.isArray(candidate)
      ? candidate.length === 0
      : Object.keys(candidate).length === 0;
};


type ReturnType<T> =
  T extends string
    ? EmptyString
    : T extends any[]
      ? never[]
      : T extends Record<string, unknown>
        ? Record<string, never>
        : never;
