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
    alignSelf: 'flex-start'
  },
  logoutButtonLabel: {
    ...Typography.inputText,
    color: Colors.prussianBlue,
    marginLeft: 9,
  },
});

export const fieldStyles = StyleSheet.create({
  fieldContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    ...Typography.inputText,
    color: Colors.prussianBlue,
    width: 200,
    height: 24,
    marginLeft: 30,
    marginRight: 'auto',
  },
  icon: {
    width: 24,
  }
});
