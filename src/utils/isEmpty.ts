export const isEmpty = (candidate: string | Record<string, unknown> | []): boolean => {
  return (typeof candidate === 'string')
    ? candidate === ''
    : Array.isArray(candidate)
      ? candidate.length === 0
      : Object.keys(candidate).length === 0; 
};
