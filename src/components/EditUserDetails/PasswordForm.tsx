import React from 'react';
import { User } from '@typings';
import { View, Animated } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useOpacityAnimation } from '../../utils/hooks';
import { ArrowBack, Lock } from '../icons';
import { IconButton } from '../common';
import { styles } from './styles';
import { Field } from './Field';

interface Props {
  user: User;
  enabled: boolean;
}

const validationSchema = yup.object().shape({
  password: yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters length'),
});

export const PasswordForm: React.FC<Props> = ({ enabled }) => {
  const onSubmit = React.useCallback(() => {
    return undefined;
  }, []);

  const form = useFormik({
    initialValues: { password: '' },
    validationSchema,
    onSubmit,
    validateOnBlur: true,
  });

  React.useEffect(() => {
    !enabled && form.resetForm();
  }, [enabled]);

  const [animatedOpacity] = useOpacityAnimation(0.4, 200, enabled);

  const fieldMeta = React.useMemo(() => ({
    initialTouched: false,
    touched: form.touched.password || false,
    value: form.values.password,
    error: form.errors.password,
  }), [form]);

  const arrowStyle = React.useMemo(() => ({
    ...styles.arrowButton,
    opacity: animatedOpacity,
  }), [animatedOpacity]);

  return (
    <View style={styles.form}>
      <Field
        meta={fieldMeta}
        onChange={form.handleChange('password')}
        placeholder="Password"
        secureTextEntry
        icon={<Lock />}
        isEditable={enabled}
      />
      <Animated.View style={arrowStyle}>
        <IconButton
          accessibilityLabel="Edit your password"
          handleClick={form.handleSubmit}
          disabled={!enabled}
        >
          <ArrowBack />
        </IconButton>
      </Animated.View>
    </View>
  );
};
