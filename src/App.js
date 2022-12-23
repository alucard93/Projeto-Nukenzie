import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [ listTransactions, setListTransactions] = useState([])
  return (
    <>
      {
        isLogin ? (
          <>
            <Header/>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
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
