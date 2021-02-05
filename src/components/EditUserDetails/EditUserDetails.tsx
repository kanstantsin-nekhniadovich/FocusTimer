import { User } from '@typings';
import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { Field } from './Field';
import { UserAvatar, Lock, ArrowBack } from '../../components/icons';
import { IconButton } from '../../components/common';
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
  const onUsernameChange = React.useCallback(({ username }: { username: string }) => {
    if (user.name === username.trim()) {
      return;
    }

    dispatch(updateUserRequest({ name: username }));
  }, [user]);

  const onPasswordChange = React.useCallback(() => {
    return undefined;
  }, []);

  return (
    <View>
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
            />
            <IconButton
              style={styles.arrowButton}
              accessibilityLabel="Edit your name"
              handleClick={handleSubmit}
            >
              <ArrowBack />
            </IconButton>
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
            />
            <IconButton
              style={styles.arrowButton}
              accessibilityLabel="Edit your password"
              handleClick={handleSubmit}
            >
              <ArrowBack />
            </IconButton>
          </View>
        )}
      </Formik>
    </View>
  );
};
