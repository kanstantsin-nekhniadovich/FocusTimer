import { StyleSheet } from 'react-native';
import { Colors, Typography, Shadows } from '@styles';

const standard = StyleSheet.create({
  btn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 36,
    textTransform: 'uppercase',
    backgroundColor: Colors.blue,
    ...Shadows.buttonShadow,
  },
  label: {
    color: Colors.white,
    ...Typography.primary,
  },
});

const social = StyleSheet.create({
  btn: {
    ...standard.btn,
    backgroundColor: Colors.chambray,
  },
  label: {
    ...standard.label,
  },
});

const outlined = StyleSheet.create({
  btn: {
    ...standard.btn,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.blue,
    backgroundColor: Colors.white,
  },
  label: {
    ...standard.label,
    color: Colors.blue,
  },
});

export const states = {
  btn: StyleSheet.create({
    active: {
      backgroundColor: Colors.darkBlue,
    },
    disabled: {
      backgroundColor: Colors.disabled,
    },
    big: {
      width: 328,
    },
    small: {
      width: 'auto',
    },
  }),
};

export const styles = {
  standard,
  social,
  outlined,
};
