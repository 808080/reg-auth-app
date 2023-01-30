import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../store/hooks';
import { logout } from '../../store/reducers/user';

const Profile = () => {
  const { data: user } = useTypedSelector(state => state.user);
  const dispatch = useTypedDispatch();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(logout());
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