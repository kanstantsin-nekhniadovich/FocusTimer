import { User } from '@typings';
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { View, Animated } from 'react-native';

import { useOpacityAnimation } from '../../utils/hooks';
import { ArrowBack, UserAvatar } from '../icons';
import { IconButton } from '../common';
import { updateUserRequest } from '../../ducks';
import { Field } from './Field';
import { styles } from './styles';

interface Props {
  user: User;
  enabled?: boolean;
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your username'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const NameForm: React.FC<Props> = ({ user, enabled = true }) => {
  const dispatch = useDispatch();
  
  const onSubmit = React.useCallback(({ name }: SchemaType) => {
    if (user.name === name.trim()) {
      return;
    }

    dispatch(updateUserRequest({ name }));
  }, [user]);

  const form = useFormik({
    initialValues: { name: user.name } as SchemaType,
    validationSchema,
    onSubmit: onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  React.useEffect(() => {
    !enabled && form.resetForm();
  }, [enabled]);

  const [animatedOpacity] = useOpacityAnimation(0.4, 200, enabled);

  const arrowStyle = React.useMemo(() => ({
    ...styles.arrowButton,
    opacity: animatedOpacity,
  }), [animatedOpacity]);

  const fieldMeta = React.useMemo(() => ({
    initialTouched: false,
    value: form.values.name,
    touched: form.touched.name || false,
    error: form.errors.name,
  }), [form]);

  return (
    <View style={styles.form}>
      <Field
        meta={fieldMeta}
        onChange={form.handleChange('name')}
        placeholder="Username"
        icon={<UserAvatar />}
        isEditable={enabled}
      />
      <Animated.View style={arrowStyle}>
        <IconButton
          accessibilityLabel="Edit your name"
          handleClick={form.handleSubmit}
          disabled={!enabled}
        >
          <ArrowBack />
        </IconButton>
      </Animated.View>
    </View>
  );
};
