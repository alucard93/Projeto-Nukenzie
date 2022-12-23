import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Form from './components/Form';
import TotalMoney from './components/Totalmoney';

function App() {
  const [isLogin, setLogin] = useState(true);
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
            <TotalMoney
            listTransactions={listTransactions}
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
