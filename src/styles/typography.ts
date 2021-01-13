/* eslint-disable no-inline-comments */
import { TextStyle } from 'react-native';

enum TypographyTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  inputText = 'inputText',
  subtitle = 'subtitle',
  subtitleLarge = 'subtitleLarge',
  subtitleSmall = 'subtitleSmall',
  primary = 'primary',
  secondary = 'secondary',
  text = 'text',
}

export const Typography: Record<TypographyTypes, TextStyle> = {
  [TypographyTypes.h1]: { // Header 1
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 36,
    letterSpacing: 3,
    lineHeight: 52,
  },
  [TypographyTypes.h2]: { // Header 2
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 36,
    letterSpacing: -0.18,
    lineHeight: 46,
  },
  [TypographyTypes.h3]: { // Header 3
    fontFamily: 'DMSans_500Medium',
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 26,
  },
  [TypographyTypes.inputText]: { // Body 2 
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
  },
  [TypographyTypes.subtitle]: { // Subtitle/Body Large
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
  },
  [TypographyTypes.subtitleLarge]: { // Body
    fontFamily: 'DMSans_700Bold',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
  },
  [TypographyTypes.subtitleSmall]: { // small 2
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 15,
  },
  [TypographyTypes.primary]: { // Primary Button
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    letterSpacing: 0.14,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  [TypographyTypes.secondary]: { // Secondary Button
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 14,
  },
  [TypographyTypes.text]: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    letterSpacing: -0.3,
    lineHeight: 18,
  }
};
