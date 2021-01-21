import { User } from '@typings';

import { api } from '../../api';
import * as mutations from './mutations';

export const updateUser = async (data: Partial<User>) => {
  return api.mutate<User>({ mutation: mutations.updateUser, variables: { data } }, 'updateUser');
}
