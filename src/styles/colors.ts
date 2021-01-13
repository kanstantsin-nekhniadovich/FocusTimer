import { ColorValue } from 'react-native';

enum ColorsType {
  black = 'black',
  white = 'white',
  blue = 'blue',
  darkBlue = 'darkBlue',
  disabled = 'disabled',
  chambray = 'chambray',
  prussianBlue = 'prussianBlue',
  silverChalice = 'silverChalice',
  doveGray = 'doveGray',
  error = 'error',
} 

export const Colors: Record<ColorsType, ColorValue> = {
  [ColorsType.black]: '#000000',
  [ColorsType.white]: '#ffffff',
  [ColorsType.blue]: '#232cc6',
  [ColorsType.darkBlue]: '#2028b6',
  [ColorsType.disabled]: '#898dce',
  [ColorsType.chambray]: '#405a9a',
  [ColorsType.prussianBlue]: '#001f5a',
  [ColorsType.silverChalice]: '#9e9e9e',
  [ColorsType.doveGray]: '#666666',
  [ColorsType.error]: '#de2c2c',
};
