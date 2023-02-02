import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../store/hooks';
import { logout, UserData } from '../../store/reducers/user';
import { setWarn } from '../../store/reducers/warn';
import FetchWrap, { HTTPmethods } from '../../utils/fetchWrap';

type LogoutAction =
  | {
    success: true
  }
  | {
    success: false, error: string
  };

const Profile = () => {
  const { data: user } = useTypedSelector(state => state.user);
  const dispatch = useTypedDispatch();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    const res = await FetchWrap<UserData, LogoutAction>(HTTPmethods.POST, '/logout', user!);
    dispatch(res.success ? logout() : setWarn(res.error));
  };

  return (
    <>
      {!user && (
        <Navigate to='/' replace />
      )}
      <h2 className='title'>Welcome {user?.name}!</h2>

      <p className='text'>To logout click <a href='' onClick={handleLogout}>here</a></p>
    </>
  );
};

export default Profile;