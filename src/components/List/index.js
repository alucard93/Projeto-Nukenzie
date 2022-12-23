import React from 'react';
import Card from '../Card';
import './style.css';
import NoCard from '../../assets/NoCard.svg'

const List = ({ transactionsList, removeTransaction, transactionsSearch, buttonFilter }) => {
    const listRender = buttonFilter !== "todos" ? 
        (transactionsSearch) 
        : 
        (transactionsList);

  return (
    <>
        {
            listRender.length ? (
                listRender.map((item, index) => 
                    <Card
                        key={index}
                        transaction={item}
                        removeTransaction={removeTransaction}
                    />
                )
            )
            :
            (
                <>
                    <div className='card-background'>
                        <div className="container">
                            <div className="container-no_card">
                            <h2>
                                Você ainda não possui nenhum lançamento
                            </h2>
                            <img src={NoCard} alt="Imagem Card Vazio" />
                            <img src={NoCard} alt="Imagem Card Vazio" />
                            <img src={NoCard} alt="Imagem Card Vazio" />
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </>
  )
}

export default List