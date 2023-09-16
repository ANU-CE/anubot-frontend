import { useState } from 'react';
import './App.css';
import Main from '../src/components/Main';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState('');

  return (
    <div className="App">
      {
        isAuthenticated ?
          <Main /> :
          <div>
            <input value={code} onChange={e => setCode(e.target.value)} />
            <button onClick={() => {
              if (code === '1234') {
                setIsAuthenticated(true);
              }
            }}>로그인</button>
          </div>
      }
    </div>
  );
}

export default App;
