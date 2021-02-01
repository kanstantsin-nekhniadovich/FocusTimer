import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { Routes } from '../../routes';
import { getIsUserSkippedLoginFlow, setUserSkippedLoginFlowRequest } from '../../ducks';
import { ArrowBack } from '../icons/ArrowBack';
import { styles } from './styles';

interface Props {
  navigation: StackNavigationProp<Screens, Routes.SignUp | Routes.Login>;
}

export const SkipButton: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isUserSkippedLoginFlow = useSelector(getIsUserSkippedLoginFlow);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsVisible(!isUserSkippedLoginFlow);
  }, [isUserSkippedLoginFlow]);

  const handlePress = React.useCallback(() => {
    dispatch(setUserSkippedLoginFlowRequest(true));
    navigation.navigate(Routes.Projects);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.label}>Skip</Text>
      <ArrowBack />
    </TouchableOpacity>
  );
};
