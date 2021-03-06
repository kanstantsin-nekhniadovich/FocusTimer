import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Common } from '@styles';

import { styles } from './styles';
import { PrimaryButton, Input, DividerBlock } from '../common';
import { createUserRequest } from '../../ducks';
import { isDefined } from '../../utils/isDefined';

const validationSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
  repeatPassword: yup.string()
    .required('Please repeat password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSignUp = React.useCallback((values: SchemaType) => {
    const { email, password } = values;
    dispatch(createUserRequest({ email, password }));
  }, []);

  const initialValues = { email: '', password: '', repeatPassword: '' } as SchemaType;

  return (
    <View style={styles.container}>
      <Formik<SchemaType>
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSignUp}
        validateOnChange
      >
        {({ touched, handleSubmit, handleChange, errors, values }) => (
          <>
            <Input
              placeholder="Email"
              keyboardType='email-address'
              value={values.email}
              onChangeText={handleChange('email')}
              isValid={!touched.email || !isDefined(errors.email)}
            />
            {touched.email && errors.email && <Text style={Common.error}>{errors.email}</Text>}
            <DividerBlock />
            <Input
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              isValid={!touched.password || !isDefined(errors.password)}
            />
            {touched.password && errors.password && <Text style={Common.error}>{errors.password}</Text>}
            <DividerBlock />
            <Input
              placeholder="Repeat password"
              secureTextEntry
              value={values.repeatPassword}
              onChangeText={handleChange('repeatPassword')}
              isValid={!touched.repeatPassword || !isDefined(errors.repeatPassword)}
            />
            {touched.repeatPassword && errors.repeatPassword && <Text style={Common.error}>{errors.repeatPassword}</Text>}
            <DividerBlock />
            <PrimaryButton title='Sign Up' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};
