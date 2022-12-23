import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Form from './components/Form';
import TotalMoney from './components/Totalmoney';
import Filters from './components/Filters';

function App() {
  const [isLogin, setLogin] = useState(true);
  const [listTransactions, setListTransactions] = useState([])
  const [transactionsSearch, setTransactionsSearch] = useState([]);
  const [buttonFilter, setButtonFilter] = useState("todos");

  
  function handleSearch(filter) {
    //realiza a filtragem conforme parametro
    const newFilter = listTransactions.filter((transaction) => transaction.type === filter);

    //seta o a variavel que recebeu a atribuição ao state
    setTransactionsSearch(newFilter);
    setButtonFilter(filter);
  }

  function clearSearch() {
    //limpa e seta no status filtro o parametro todos
    setTransactionsSearch([]);
    setButtonFilter("todos");
  }

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

            <Filters
              handleSearch={handleSearch}
              clearSearch={clearSearch}
              buttonFilter={buttonFilter}
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
