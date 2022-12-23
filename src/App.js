import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      {
        isLogin ? (
          <>
          </>
        ) :
        (
          <Login setLogin={setLogin}/>
        )
      }
    </>
  );
}

export default App;
