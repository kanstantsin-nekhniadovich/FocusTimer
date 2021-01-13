import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { loginRequest } from '../../ducks/auth';
import { Input, DividerBlock, PrimaryButton } from '../common';
import { styles } from './styles';

interface FormProps {
  email: string;
  password: string;
}

const validationShema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleForgotPassword = React.useCallback(() => {
    console.log('forgot password');
  }, []);

  const handleLogIn = React.useCallback((values) => {
    dispatch(loginRequest(values));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Don&#39;t miss the opportunity. Log in to create your project.</Text>
      <DividerBlock height={20} />
      <Formik<FormProps>
        validationSchema={validationShema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogIn}
        validateOnChange
      >
        {({ handleSubmit, errors, values, handleChange, touched }) => (
          <>
            <Input
              placeholder="Email"
              keyboardType='email-address'
              value={values.email}
              isValid={!touched.email || !errors.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <DividerBlock height={20} />
            <Input
              placeholder="Password"
              secureTextEntry
              isValid={!touched.password || !errors.password}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <DividerBlock height={2} />
            <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <DividerBlock height={10} />
            <PrimaryButton title="Log In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};
