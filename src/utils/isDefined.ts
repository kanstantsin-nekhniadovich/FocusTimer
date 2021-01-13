export const isDefined = <T>(candidate: Maybe<T>): candidate is T => {
  return candidate !== null && candidate !== undefined;
};
