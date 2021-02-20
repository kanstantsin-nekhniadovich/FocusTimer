import { StyleSheet } from 'react-native';
import { Typography, Colors } from '@styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    right: 15,
    width: 125,
    height: 135,
  },
  filterBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.alabaster,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
    position: 'absolute',
    padding: 6,
    overflow: 'hidden',
  },
  iconButton: {
    height: 42,
    width: 42,
    position: 'absolute',
    right: 0,
    zIndex: 0,
  },
  crossButton: {
    zIndex: 2,
  },
  filterIsAppliedIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    backgroundColor: Colors.alabaster,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    zIndex: 1,
  },
});

export const filterItemStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  gradient: {
    borderRadius: 10,
  },
  label: {
    ...Typography.text,
    letterSpacing: 0,
    color: Colors.prussianBlue,
    paddingRight: 8,
  },
  tick: {
    position: 'absolute',
    top: 10,
    right: 6,
  },
});
