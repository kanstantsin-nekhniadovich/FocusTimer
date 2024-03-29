import React from 'react';
import { User } from '@typings';
import { View, Animated } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Routes } from '../../routes';
import { useOpacityAnimation } from '../../utils/hooks';
import { ArrowBack, Lock } from '../icons';
import { IconButton, EditableTextField } from '../common';
import { styles } from './styles';

interface Props {
  user: User;
  enabled: boolean;
}

const validationSchema = yup.object().shape({
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const PasswordForm: React.FC<Props> = ({ enabled }) => {
  const navigation = useNavigation<NavigationProp<Screens, Routes.UpdatePassword>>();
  const onSubmit = ({ password }: SchemaType) => {
    navigation.navigate({
      name: Routes.UpdatePassword,
      params: { password },
    });
  };

  const form = useFormik({
    initialValues: { password: '' } as SchemaType,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  React.useEffect(() => {
    !enabled && form.resetForm();
  }, [enabled]);

  const [animatedOpacity] = useOpacityAnimation(0.4, 200, enabled);

  const fieldMeta = {
    initialTouched: false,
    touched: form.touched.password ?? false,
    value: form.values.password,
    error: form.errors.password,
  };

  const arrowStyle = {
    ...styles.arrowButton,
    opacity: animatedOpacity,
  };

  return (
    <View style={styles.form}>
      <EditableTextField
        meta={fieldMeta}
        onChangeText={form.handleChange('password')}
        placeholder="New password"
        secureTextEntry
        icon={<Lock />}
        isEditable={enabled}
      />
      <Animated.View style={arrowStyle}>
        <IconButton
          accessibilityLabel="Edit your password"
          onPress={form.handleSubmit}
          disabled={!enabled}
        >
          <ArrowBack />
        </IconButton>
      </Animated.View>
    </View>
  );
};
