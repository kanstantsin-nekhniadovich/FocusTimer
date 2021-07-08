import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedArea: {
    justifyContent: 'center',
    width: 220,
    height: 36,
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 'auto',
    borderRadius: 4,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  input: {
    ...Typography.inputText,
    color: Colors.prussianBlue,
    paddingHorizontal: 16,
    backgroundColor: Colors.alabaster,
  },
  icon: {
    width: 24,
    height: 28,
    alignItems: 'center',
  },
  mask: {
    alignContent: 'center',
    ...Typography.inputText,
    color: Colors.prussianBlue,
    paddingLeft: 16,
  },
});
