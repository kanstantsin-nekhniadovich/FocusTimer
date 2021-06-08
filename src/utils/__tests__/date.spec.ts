import { convertMinutesInMilliseconds, formatMillisecondsToMinutes, convertMillisecondsToTimeFormat } from '../date';

describe('date utils', () => {
  describe('convertMinutesInMilliseconds util', () => {
    it('should convert 0 minutes to milliseconds', () => {
      const result = convertMinutesInMilliseconds(0);

      expect(result).toEqual(0);
    });

    it('should convert 30 minutes to milliseconds', () => {
      const result = convertMinutesInMilliseconds(30);

      expect(result).toEqual(1800000);
    });
  });

  describe('formatMillisecondsToMinutes util', () => {
    it('should format 0 milliseconds to minutes', () => {
      const result = formatMillisecondsToMinutes(0);

      expect(result).toEqual('0 min');
    });

    it('should format 1800000 milliseconds to minutes', () => {
      const result = formatMillisecondsToMinutes(1800000);

      expect(result).toEqual('30 min');
    });

    it('should format 1799999 milliseconds to minutes', () => {
      const result = formatMillisecondsToMinutes(1799999);

      expect(result).toEqual('29 min');
    });

    it('should format 1 millisecond to minutes', () => {
      const result = formatMillisecondsToMinutes(1);

      expect(result).toEqual('0 min');
    });
  });

  describe('convertMillisecondsToTimeFormat util', () => {
    it('should convert 0 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(0);

      expect(result).toEqual('00:00');
    });

    it('should convert 1000 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(1000);

      expect(result).toEqual('00:01');
    });

    it('should convert 60000 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(60000);

      expect(result).toEqual('01:00');
    });

    it('should convert 601000 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(601000);

      expect(result).toEqual('10:01');
    });

    it('should convert 3600000 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(3600000);

      expect(result).toEqual('01:00:00');
    });

    it('should convert 3800000 milliseconds to time format', () => {
      const result = convertMillisecondsToTimeFormat(3800000);

      expect(result).toEqual('01:03:20');
    });
  });
});
