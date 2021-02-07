import { StyleSheet, Dimensions } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.alabaster,
    height: Dimensions.get('screen').height,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  header: {
    ...Typography.h3,
    color: Colors.prussianBlue,
  },
  message: {
    ...Typography.message,
    width: '80%',
    color: Colors.doveGray,
    alignSelf: 'flex-start',
  },
});
