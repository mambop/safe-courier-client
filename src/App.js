import React from 'react';
import axios from 'axios';
import { AuthContextProvider } from './AuthContext';
import Routes from "./Routes";



//allow cookie save from server
axios.defaults.withCredentials = true;

function App() {

  return (
    <AuthContextProvider>
      <Routes />
      
    </AuthContextProvider>

  );
}

export default App;
