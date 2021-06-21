import React from 'react';
import Routers from './Routers';
import axios from 'axios';
import { AuthContextProvider } from './AuthContext';

axios.defaults.withCredentials = true;
function App() {
  return (
    <AuthContextProvider>
      <Routers/>

    </AuthContextProvider>
  );
}

export default App;
