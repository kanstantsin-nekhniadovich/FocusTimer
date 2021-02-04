import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: Colors.alabaster,
    height: Dimensions.get('screen').height,
    paddingHorizontal: 37,
    paddingBottom: 37,
  },
  title: {
    ...Typography.h3,
    color: Colors.prussianBlue,
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: 'center',
  },
  notLoginMessage: {
    ...Typography.h3,
    color: Colors.prussianBlue,
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: 'auto',
    paddingHorizontal: 10,
  },
  logoutButtonLabel: {
    ...Typography.inputText,
    color: Colors.prussianBlue,
    marginLeft: 9,
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
});
