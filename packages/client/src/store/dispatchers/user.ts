import { Dispatch } from 'react';
import FetchWrap, { HTTPmethods } from '../../utils/fetchWrap';
import { getUserId } from '../../utils/userStore';
import { LoginAction, loginFailed, loginSuccess, UserData } from '../reducers/user';


export const getUser = () => async (dispatch: Dispatch<LoginAction>) => {
  const userId = getUserId();
  if (userId) {
    const user = await FetchWrap<undefined, UserData>(HTTPmethods.GET, `/user/${userId}`);
    dispatch(user.success ? loginSuccess(user.data) : loginFailed(user.error));
  }
};

