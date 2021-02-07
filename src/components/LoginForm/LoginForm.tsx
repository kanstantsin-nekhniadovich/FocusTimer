import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Common } from '@styles';

import { loginRequest } from '../../ducks/auth';
import { Input, DividerBlock, PrimaryButton } from '../common';
import { styles } from './styles';

const validationShema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
});

type SchemaType = yup.InferType<typeof validationShema>;

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleForgotPassword = React.useCallback(() => {
    console.log('forgot password');
  }, []);

  const handleLogIn = React.useCallback((values) => {
    dispatch(loginRequest(values));
  }, []);

  const initialValues = { email: '', password: '' } as SchemaType;

  return (
    <View style={styles.container}>
      <Formik<SchemaType>
        validationSchema={validationShema}
        initialValues={initialValues}
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
            {touched.email && errors.email && <Text style={Common.error}>{errors.email}</Text>}
            <DividerBlock />
            <Input
              placeholder="Password"
              secureTextEntry
              isValid={!touched.password || !errors.password}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={Common.error}>{errors.password}</Text>}
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
