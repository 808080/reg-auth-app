import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import WarnModal from './components/Warn';
import { router } from './routes';
import { getUser } from './store/dispatchers/user';
import { useTypedDispatch, useTypedSelector } from './store/hooks';

const App = () => {
  const { data: user, isLoading } = useTypedSelector(state => state.user);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (user) return;
    dispatch(getUser());
  }, [user?.id]);

  return (
    <div className='container'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <main>
            <RouterProvider router={router} />
          </main>
          <WarnModal />
        </>
      )}
    </div>
  );
};

export default App;