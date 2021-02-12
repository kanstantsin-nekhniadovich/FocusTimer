import { ShadowStyleIOS } from 'react-native';

export const Shadows: Record<string, ShadowStyleIOS & { elevation: number }> = {
  buttonShadow: {
    elevation: 15,
    shadowColor: '#2934D0',
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.15,
  },
};
