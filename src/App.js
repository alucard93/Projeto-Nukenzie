import './styles/global.css'
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Form from './components/Form';
import TotalMoney from './components/Totalmoney';
import Filters from './components/Filters';
import List from './components/List';

function App() {
  const [isLogin, setLogin] = useState(true);
  const [listTransactions, setListTransactions] = useState([])
  const [transactionsSearch, setTransactionsSearch] = useState([]);
  const [buttonFilter, setButtonFilter] = useState("todos");
  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value:0,
  });

  function removeTransaction(transactionTarget) {

    //tudo que foi diferente do que cliquei eu armazeno e deleto o que cliquei
    const listRefreshed = listTransactions.filter(transaction => transaction !== transactionTarget);
    setListTransactions(listRefreshed);

      if (transactionsSearch.length > 0) {
        //atualizo o filtro
        const listRefreshedOnFilter = transactionsSearch.filter(transaction => transaction !== transactionTarget);
        setTransactionsSearch(listRefreshedOnFilter);
      }
  }

  function handleSubmit(e) {
    e.preventDefault();
      const newTransaction = {
        description: formData.description,
        type: formData.type,
        value: formData.value,
      };
      if(newTransaction.type === 'despesa') {
        newTransaction.value *= -1
      }

      setListTransactions([...listTransactions, newTransaction]);

      setFormData({
        description: "",
        type: "entrada",
        value: 0,
      });
  }

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
              handleSubmit={handleSubmit}
                setFormData={setFormData}
                formData={formData}
            />
            
            <TotalMoney
              listTransactions={listTransactions}
            />

            <Filters
              handleSearch={handleSearch}
              clearSearch={clearSearch}
              buttonFilter={buttonFilter}
            />
            
            <List
              transactionsList={listTransactions}
              removeTransaction={removeTransaction}
              transactionsSearch={transactionsSearch}
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
