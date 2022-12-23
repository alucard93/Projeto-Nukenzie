import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      {
        isLogin ? (
          <>
            <Header/>
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
