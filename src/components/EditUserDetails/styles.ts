import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  arrowButton: {
    position: 'absolute',
    top: -4,
    right: -15,
  },
  avatar: {
    alignSelf: 'center',
  },
  emailHolder: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    marginLeft: 20,
    ...Typography.inputText,
    color: Colors.doveGray,
  },
  editButton: {
    position: 'absolute',
    right: -15,
  },
});

export const fieldStyles = StyleSheet.create({
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
    alignItems: 'center',
  },
});
