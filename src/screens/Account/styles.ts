import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@styles';

export const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 37,
    paddingRight: 30,
    paddingBottom: 37,
  },
  title: {
    ...Typography.h3,
    color: Colors.prussianBlue,
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
});
