import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { useSelector } from 'react-redux';
import { Colors } from '@styles';

import { getIsUserSkippedLoginFlow } from './ducks';
import { Login, Account, SignUp, Projects, UpdatePassword, NewProject, Project } from './screens';
import { Routes } from './routes';
import { Cross } from './components/icons';
import { AvatarHeader } from './components/AvatartHeader';
import { ProjectHeader } from './components/ProjectHeader';
import { HeaderTitle, IconButton } from './components/common';

enableScreens();
const Stack = createStackNavigator<Screens>();

const commonNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.alabaster,
  },
};

const SignUpHeader = () => <HeaderTitle title="Sign up" />;
const ProjectsHeader = () => <HeaderTitle title="My projects" />;
const MyAccountHeader = () => <HeaderTitle title="My account" />;
const UpdatePasswordHeader = () => <HeaderTitle title="My password" />;
const NewProjectsHeader = () => <HeaderTitle title="New projects" />;

export const Navigator: React.FC = () => {
  const isUserSkippedLoginFlow = useSelector(getIsUserSkippedLoginFlow);
  const initialRouteName = isUserSkippedLoginFlow ? Routes.Projects : Routes.Login;

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{
          headerTitle: SignUpHeader,
          ...commonNavigationOptions
        }}
      />
      <Stack.Screen
        name={Routes.Account}
        component={Account}
        options={{
          headerTitle: MyAccountHeader,
          ...commonNavigationOptions
        }}
      />
      <Stack.Screen
        name={Routes.Projects}
        component={Projects}
        options={({ navigation }) => ({
          headerLeft: () => <AvatarHeader navigation={navigation} />, /* eslint-disable-line react/display-name */
          headerTitle: ProjectsHeader,
          ...commonNavigationOptions,
        })}
      />
      <Stack.Screen
        name={Routes.UpdatePassword}
        component={UpdatePassword}
        options={{
          headerTitle: UpdatePasswordHeader,
          ...commonNavigationOptions,
        }}
      />
      <Stack.Screen
        name={Routes.NewProject}
        component={NewProject}
        options={({ navigation }) => ({
          headerLeft: () => ( /* eslint-disable-line react/display-name */
            <IconButton onPress={() => navigation.navigate(Routes.Projects)} accessibilityLabel="Close new project">
              <Cross color={Colors.prussianBlue} />
            </IconButton>
          ),
          headerTitle: NewProjectsHeader,
          ...commonNavigationOptions,
          animationTypeForReplace: 'pop',
        })}
      />
      <Stack.Screen
        name={Routes.Project}
        component={Project}
        options={({ navigation, route }) => ({
          headerLeft: () => <AvatarHeader navigation={navigation} />, /* eslint-disable-line react/display-name */
          headerTitle: () => <ProjectHeader route={route} />, /* eslint-disable-line react/display-name */
          ...commonNavigationOptions,
        })}
      />
    </Stack.Navigator>
  );
};
