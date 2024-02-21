import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './components/Loader';
import PageTitle from './components/PageTitle';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Data from './pages/Data';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />

        <Route
          path="/data"
          element={
            <>
              <PageTitle title="Data" />
              <Data />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
