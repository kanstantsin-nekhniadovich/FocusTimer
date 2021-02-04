import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export const fieldStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  error: {
    position: 'absolute',
    bottom: 0,
  },
  animatedArea: {
    justifyContent: 'center',
    width: 210,
    height: 36,
    marginLeft: 20,
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
    alignItems: 'center',
  },
});
