import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { Colors } from '@styles';

import { navigate } from '../../services/navigation';
import { Input, IconButton } from '../common';
import { CircePlus } from '../icons';
import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';
import { Routes } from 'src/routes';

const validationSchema = yup.object().shape({
  title: yup.string().required('Please provide task name'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

const initialValues = { title: '' } as SchemaType;

interface Props {
  projectId: Id;
}

export const AddTaskForm: React.FC<Props> = ({ projectId }) => {
  const onSubmit = React.useCallback((values: SchemaType) => {
    navigate(Routes.Task, { title: values.title, projectId });
  }, [projectId]);

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
