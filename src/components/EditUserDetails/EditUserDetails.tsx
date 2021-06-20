import { User } from '@typings';
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@styles';

import { NameForm } from './NameForm';
import { PasswordForm } from './PasswordForm';
import { Email, Cross, Edit } from '../../components/icons';
import { Avatar } from '../../components/Avatar';
import { IconButton, DividerBlock } from '../../components/common';
import { styles } from './styles';

interface Props {
  user: User;
}

export const EditUserDetails: React.FC<Props> = ({ user }) => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.editButton}
        accessibilityLabel='Edit your account'
        onPress={toggleEditMode}
      >
        {isEditMode ? <Cross color={Colors.prussianBlue} width={16} /> : <Edit width={16} />}
      </IconButton>
      <DividerBlock height={50} />
      <View style={styles.avatar}><Avatar user={user} isEditable={isEditMode} /></View>
      <DividerBlock height={25} />
      <View style={styles.emailHolder}>
        <Email width={16} color={Colors.doveGray} />
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <DividerBlock height={60} />
      <NameForm user={user} enabled={isEditMode} />
      <PasswordForm user={user} enabled={isEditMode} />
    </View>
  );
};
