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
