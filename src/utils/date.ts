const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_MINUTE = 60 * MILLISECONDS_IN_SECOND;
const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE;

const paddingStart = (value: number) => value.toString().padStart(2, '0');

const convertMillisecondsInHours = (milliseconds: number) => Math.floor(milliseconds / MILLISECONDS_IN_HOUR);

const convertMillisecondsInMinutes = (milliseconds: number, rounded: boolean = false) =>
  rounded
    ? Math.round(milliseconds / MILLISECONDS_IN_MINUTE)
    : Math.floor(milliseconds / MILLISECONDS_IN_MINUTE);

export const formatMillisecondsToMinutes = (milliseconds: number) => `${convertMillisecondsInMinutes(milliseconds)} min`;

export const convertMillisecondsToTimeFormat = (milliseconds: number) => {
  const hours = convertMillisecondsInHours(milliseconds);
  const restForMinutes = milliseconds - hours * MILLISECONDS_IN_HOUR;

  const minutes = convertMillisecondsInMinutes(restForMinutes);
  const restForSeconds = restForMinutes - minutes * MILLISECONDS_IN_MINUTE;

  const seconds = restForSeconds / MILLISECONDS_IN_SECOND;

  return hours
    ? `${paddingStart(hours)}:${paddingStart(minutes)}:${paddingStart(seconds)}`
    : `${paddingStart(minutes)}:${paddingStart(seconds)}`;
};

export const convertMinutesInMilliseconds = (minutes: number) => minutes * MILLISECONDS_IN_MINUTE;
