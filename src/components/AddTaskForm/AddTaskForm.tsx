import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Colors } from '@styles';

import { Input, IconButton } from '../common';
import { CircePlus } from '../icons';
import { isDefined } from '../../utils/isDefined';
import { isEmpty } from '../../utils/isEmpty';
import { createTaskRequest } from '../../ducks';
import { convertMinutesInMilliseconds } from '../../utils/date';
import { DEFAULT_BREAK_TIME_IN_MINUTES, DEFAULT_WORK_TIME_IN_MINUTES } from '../../utils/constants';

import { styles } from './styles';

const validationSchema = yup.object().shape({
  title: yup.string().required('Please provide task name'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

const initialValues = { title: '' } as SchemaType;

interface Props {
  projectId: Id;
}

export const AddTaskForm: React.FC<Props> = ({ projectId }) => {
  const dispatch = useDispatch();

  const onSubmit = (values: SchemaType) => {
    const workTime = convertMinutesInMilliseconds(DEFAULT_WORK_TIME_IN_MINUTES);
    const breakTime = convertMinutesInMilliseconds(DEFAULT_BREAK_TIME_IN_MINUTES);
    const taskPayload = {
      title: values.title,
      cyclesCount: 1,
      workTime,
      breakTime,
      project: {
        id: projectId,
      }
    };

    dispatch(createTaskRequest(taskPayload));
  };

  const { handleSubmit, handleChange, touched, errors, isValid, values, resetForm } = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  useFocusEffect(React.useCallback(() => {
    resetForm();
  }, []));

  const iconButtonStyles = !isValid || isEmpty(values.title) ? styles.disabledButton : {};

  return (
    <View style={styles.form}>
      <Input
        placeholder="Task title"
        value={values.title}
        onChangeText={handleChange('title')}
        isValid={touched.title && !isDefined(errors.title)}
      />
      {touched.title && isDefined(errors.title) && <Text style={styles.error}>{errors.title}</Text>}
      <IconButton
        accessibilityLabel="add task button"
        onPress={handleSubmit}
        disabled={!isValid}
        style={iconButtonStyles}
      >
        <CircePlus color={Colors.blue} />
      </IconButton>
    </View>
  );
};
