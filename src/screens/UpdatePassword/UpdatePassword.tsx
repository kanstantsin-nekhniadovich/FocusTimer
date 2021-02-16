import React from 'react';
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { StackScreenProps } from '@react-navigation/stack';
import { Common } from '@styles';

import { Routes } from '../../routes';
import { DividerBlock, Input, OverlayLoader } from '../../components/common';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { styles } from './styles';
import { updateUserRequest, getIsUserLoading } from '../../ducks';

type Props = StackScreenProps<Screens, 'UpdatePassword'>;

const validationSchema = yup.object().shape({
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
  confirmPassword: yup.string()
    .required('Please repeat password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const UpdatePassword: React.FC<Props> = ({ route, navigation }) => {
  const [isPasswordUpdated, setIsPasswordUpdated] = React.useState(false); 
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsUserLoading);

  React.useEffect(() => {
    !isLoading && isPasswordUpdated && navigation.navigate(Routes.Account);
  }, [isPasswordUpdated, isLoading, navigation]);

  const onSubmit = React.useCallback(({ password }: SchemaType) => {
    dispatch(updateUserRequest({ password }));
    setIsPasswordUpdated(true);
  }, []);

  const initialValues = React.useMemo(() => ({ password: route.params.password, confirmPassword: '' }) as SchemaType, [route]);
  
  return (
    <>
      {isLoading && <OverlayLoader />}
      <View style={styles.container}>
        <Text style={styles.header}>Update your password</Text>
        <DividerBlock height={16} />
        <Text style={styles.message}>Your new password must be different from previous used passwords.</Text>
        <DividerBlock height={16} />
        <Formik<SchemaType>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnBlur
        >
          {({ handleSubmit, values, errors, touched, handleChange, handleBlur }) => (
            <>
              <Input
                value={values.password}
                placeholder="Password"
                onChangeText={handleChange('password')}
                secureTextEntry
                isValid={!touched.password || !errors.password}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password && <Text style={Common.error}>{errors.password}</Text>}
              <DividerBlock />
              <Input
                value={values.confirmPassword}
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                isValid={!touched.confirmPassword || !errors.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && <Text style={Common.error}>{errors.confirmPassword}</Text>}
              <DividerBlock height={56} />
              <PrimaryButton
                onPress={handleSubmit}
                title="Reset password"
              />
            </>
          )}
        </Formik>
      </View>
    </>
  );
};