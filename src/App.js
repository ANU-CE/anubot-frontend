import { useState } from 'react';
import Main from '../src/components/Main';
import Login from '../src/components/Login';

import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {
        isAuthenticated ?
          <Main /> :
          <Login onSuccess={() => setIsAuthenticated(true)} />
      }
    </div >
  );
}

export default App;
