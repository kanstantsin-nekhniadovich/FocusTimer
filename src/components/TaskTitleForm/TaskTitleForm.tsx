import { Task } from '@typings';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TouchableWithoutFeedback, View, Animated, Keyboard, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';

import { updateTaskRequest } from '../../ducks';
import { EditableTextField, IconButton } from '../../components/common';
import { ArrowBack, Notes } from '../../components/icons';
import { useOpacityAnimation } from '../../utils/hooks';
import { isEmpty } from '../../utils/isEmpty';

import { styles } from './styles';

interface Props {
  task: Task;
}

const validationSchema = yup.object().shape({
  title: yup.string()
    .required('Please enter your title'),
});

type SchemaType = yup.InferType<typeof validationSchema>;

export const TaskTitleForm = ({ task }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = React.useState(false);
  const [titleValue] = React.useState(task.title);

  const onSubmit = ({ title }: { title: string }) => {
    Keyboard.dismiss();
    onBlur();

    if (title.trim() === task.title.trim() || isEmpty(title)) {
      return;
    }

    dispatch(updateTaskRequest({ id: task.id, title: title.trim() }));
  };

  const onPress = () => setIsEditable(true);
  const onBlur = () => setIsEditable(false);

  const onSubmitEditing = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) =>
    onSubmit({ title: nativeEvent.text });

  const [animatedOpacity] = useOpacityAnimation(0.4, 200, isEditable);

  const form = useFormik({
    initialValues: { title: titleValue } as SchemaType,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const fieldMeta = {
    initialTouched: false,
    touched: form.touched.title ?? false,
    value: form.values.title,
    error: form.errors.title,
  };

  const arrowStyle = {
    ...styles.arrowButton,
    opacity: animatedOpacity,
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} accessibilityLabel="task-title-form">
      <View style={styles.form}>
        <EditableTextField
          meta={fieldMeta}
          onChangeText={form.handleChange('title')}
          placeholder="Task title"
          icon={<Notes />}
          isEditable={isEditable}
          onBlur={onBlur}
          setFocus
          onSubmitEditing={onSubmitEditing}
        />
        <Animated.View style={arrowStyle}>
          <IconButton
            accessibilityLabel="Edit task title"
            onPress={form.handleSubmit}
            disabled={!isEditable}
          >
            <ArrowBack />
          </IconButton>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
