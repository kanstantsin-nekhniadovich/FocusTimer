import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { Colors, Common } from '@styles';

import { Input, IconButton } from '../common';
import { CircePlus } from '../icons';
import { isDefined } from '../../utils/isDefined';

import { styles } from './styles';

const validationSchema = yup.object().shape({
  title: yup.string().required('Please provide task name'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

const initialValues = { title: '' } as SchemaType;

export const AddTaskForm: React.FC = () => {
  const onSubmit = React.useCallback(() => {

  }, []);

  return (
    <Formik<SchemaType>
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, isValid, touched, errors }) => (
        <>
          <View style={styles.form}>
            <Input
              placeholder="Task name"
              value={values.title}
              onChangeText={handleChange('title')}
              isValid={touched.title && !isDefined(errors.title)}
            />
            <IconButton
              accessibilityLabel="add task button"
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <CircePlus color={Colors.blue} />
            </IconButton>
          </View>
          {touched.title && isDefined(errors.title) && <Text style={Common.error}>{errors.title}</Text>}
        </>
      )}
    </Formik>
  );
};
