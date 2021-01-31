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
  chatelle = 'chatelle',
  alabaster = 'alabaster',
  error = 'error',
  black_60 = 'black_60',
  concrete = 'concrete',
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
  [ColorsType.chatelle]: '#c2b9c3',
  [ColorsType.alabaster]: '#fbfbfb',
  [ColorsType.error]: '#de2c2c',
  [ColorsType.black_60]: 'rgba(0, 0, 0, 0.6)',
  [ColorsType.concrete]: '#f2f2f2',
};
