import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
  },
  header: {
    ...Typography.subtitleLarge,
    textAlign: 'center'
  },
  list: {
    maxHeight: '75%',
  }
});

export const itemStyles = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    alignItems: 'center',
    height: 36,
    marginBottom: 20,
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Typography.subtitle,
    fontSize: 16,
    color: Colors.prussianBlue,
    textTransform: 'capitalize',
    marginLeft: 15,
    maxWidth: 180,
  },
  newTaskLabel: {
    ...Typography.text,
    color: Colors.prussianBlue,
  },
  timeHolder: {
    width: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  remainingTime: {
    ...Typography.primary,
    color: Colors.silverChaliceLight,
    textTransform: 'lowercase',
  }
});
