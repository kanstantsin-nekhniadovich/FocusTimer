import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '@styles';

import { Input, IconButton } from '../common';
import { CircePlus } from '../icons';
import { isDefined } from '../../utils/isDefined';
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

  return (
    <Formik<SchemaType>
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange
    >
      {({ handleSubmit, handleChange, values, isValid, touched, errors }) => (
        <>
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
            >
              <CircePlus color={Colors.blue} />
            </IconButton>
          </View>
        </>
      )}
    </Formik>
  );
};
