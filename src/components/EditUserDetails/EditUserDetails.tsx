import { User } from '@typings';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Colors } from '@styles';

import { Field } from './Field';
import { UserAvatar, Lock, ArrowBack, Email, Cross, Edit } from '../../components/icons';
import { Avatar } from '../../components/Avatar';
import { IconButton, DividerBlock } from '../../components/common';
import { updateUserRequest } from '../../ducks';
import { styles } from './styles';

interface Props {
  user: User;
}

const usernameValidationSchema = yup.object().shape({
  username: yup.string().required('Please enter your username'),
});

const passwordValidationSchema = yup.object().shape({
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
});

export const EditUserDetails: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const animatedOpacity = React.useRef(new Animated.Value(0.4)).current;

  React.useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: isEditMode ? 1 : 0.4,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEditMode, animatedOpacity]);

  const onUsernameChange = React.useCallback(({ username }: { username: string }) => {
    if (user.name === username.trim()) {
      return;
    }

    dispatch(updateUserRequest({ name: username }));
  }, [user, isEditMode]);

  const onPasswordChange = React.useCallback(() => {
    return undefined;
  }, []);

  const toggleEditMode = React.useCallback(() => {
    setIsEditMode(!isEditMode);
  }, [isEditMode, user]);

  const arrowStyle = React.useMemo(() => ({
    ...styles.arrowButton,
    opacity: animatedOpacity,
  }), [animatedOpacity]);

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.editButton}
        accessibilityLabel='Edit your account'
        handleClick={toggleEditMode}
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
      <Formik<{ username: string }>
        initialValues={{ username: user.name }}
        validationSchema={usernameValidationSchema}
        validateOnBlur
        onSubmit={onUsernameChange}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <Field
              name="username"
              placeholder="Username"
              icon={<UserAvatar />}
              isEditable={isEditMode}
            />
            <Animated.View style={arrowStyle}>
              <IconButton
                accessibilityLabel="Edit your name"
                handleClick={handleSubmit}
                disabled={!isEditMode}
              >
                <ArrowBack />
              </IconButton>
            </Animated.View>
          </View>
        )}
      </Formik>
      <Formik<{ password: string }>
        initialValues={{ password: '' }}
        validationSchema={passwordValidationSchema}
        validateOnBlur
        onSubmit={onPasswordChange}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              secureTextEntry
              icon={<Lock />}
              isEditable={isEditMode}
            />
            <Animated.View style={arrowStyle}>
              <IconButton
                accessibilityLabel="Edit your password"
                handleClick={handleSubmit}
                disabled={!isEditMode}
              >
                <ArrowBack />
              </IconButton>
            </Animated.View>
          </View>
        )}
      </Formik>
    </View>
  );
};
