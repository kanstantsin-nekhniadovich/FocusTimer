import { ShadowStyleIOS } from 'react-native';

export const Shadows: Record<string, ShadowStyleIOS & { elevation: number }> = {
  buttonShadow: {
    shadowColor: '#2934D0',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 15,
    elevation: 15,
  }
};
