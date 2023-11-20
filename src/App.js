import { useState } from 'react';
import Main from '../src/components/Main';
import Login from '../src/components/Login';

import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [recentMessages, setRecentMessages] = useState([]);

  return (
    <div className="App">
      {
        isAuthenticated ?
          <Main messages={recentMessages} /> :
          <Login onSuccess={(data) => {
            setIsAuthenticated(true)
            setRecentMessages(data.recent_chats ?? [])
          }} />
      }
    </div >
  );
}

export default App;
