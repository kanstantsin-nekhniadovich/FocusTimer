import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Common } from '@styles';

import { updateProjectRequest } from '../../ducks';
import { Input, Modal, PrimaryButton, DividerBlock } from '../common';
import { isDefined } from '../../utils/isDefined';

import { editNoteModalStyles } from './styles';

const MIN_LENGTH = 10;
const MAX_LENGTH = 80;

interface Props {
  projectId: string;
  onClose: () => void;
  title: string;
  note?: string;
  isVisible?: boolean;
}

const validationSchema = yup.object().shape({
  note: yup.string().required('Please enter a note')
    .min(MIN_LENGTH)
    .max(MAX_LENGTH)
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const EditNoteModal: React.FC<Props> = ({ projectId, onClose, title, note, isVisible = false }) => {
  const dispatch = useDispatch();
  const onSubmit = (data: SchemaType) => {
    dispatch(updateProjectRequest({ id: projectId, data: { ...data, note: data.note.trim() } }));
    onClose();
  };

  const initialValues = ({ note: isDefined(note) ? note : '' }) as SchemaType;
  const submitButtonTitle = isDefined(note) ? 'Update note' : 'Save note';

  return (
    <Modal
      isVisible={isVisible}
      title={title}
      onClose={onClose}
    >
      <Formik<SchemaType>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange
      >
        {({ handleSubmit, values, handleChange, touched, errors }) => (
          <View style={editNoteModalStyles.form}>
            <Text style={editNoteModalStyles.noteLengthIndicator}>{`${values.note.length} / ${MAX_LENGTH}`}</Text>
            <Input
              placeholder="Note"
              value={values.note}
              isValid={!touched.note || !isDefined(errors.note)}
              onChangeText={handleChange('note')}
              multiline
              numberOfLines={2}
              style={editNoteModalStyles.textarea}
            />
            {touched.note && errors.note && <Text style={Common.error}>{errors.note}</Text>}
            <DividerBlock />
            <View style={editNoteModalStyles.buttons}>
              <PrimaryButton
                onPress={onClose}
                variant="outlined"
                size="small"
                title="Close"
                style={{ ...editNoteModalStyles.button, marginRight: 12 }}
              />
              <PrimaryButton
                onPress={handleSubmit}
                size="small"
                title={submitButtonTitle}
                style={editNoteModalStyles.button}
              />
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
};
