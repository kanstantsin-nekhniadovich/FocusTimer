import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Common } from '@styles';

import { Routes } from '../../routes';
import { DividerBlock, PrimaryButton, Input } from '../../components/common';
import { CreateProjectHeader } from '../../components/icons';
import { createProjectRequest } from '../../ducks';
import { isDefined } from '../../utils/isDefined';

const validationSchema = yup.object().shape({
  title: yup.string()
    .required('Please enter project name')
    .min(3, 'Project name must be at least 3 characters'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const CreateProjectForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSubmit = (value: SchemaType) => {
    dispatch(createProjectRequest(value));
    navigation.navigate(Routes.Projects);
  };

  const initialValues = { title: '' } as SchemaType;

  return (
    <Formik<SchemaType>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => {
        const isDisabled = isDefined(errors.title) || !values.title;

        return (
          <>
            <Input
              placeholder="Project name"
              value={values.title}
              onChangeText={handleChange('title')}
              isValid={!touched.title || !isDefined(errors.title)}
            />
            {touched.title && errors.title && <Text style={Common.error}>{errors.title}</Text>}
            <DividerBlock height={85} />
            <CreateProjectHeader />
            <DividerBlock height={320} />
            <PrimaryButton onPress={handleSubmit} variant="standard" size="small" title="Save project" disabled={isDisabled} />
          </>
        );
      }}
    </Formik>
  );
};
