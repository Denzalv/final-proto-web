import React from 'react';
import Signin from './components/signIn/Signin';
import Signup from './components/signUp/Signup';
import Account from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import LandingPage from './Pages/landingPage';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/main'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
