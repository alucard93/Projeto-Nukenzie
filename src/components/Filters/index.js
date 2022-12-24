import React from 'react'
import './style.css'

const Filters = ({ handleSearch, clearSearch, buttonFilter }) => {
  return (
    <div className='filters-background'>
        <div className="container">
            <div className="container-nav">
                <h3>Resumo financeiro</h3>
                <div className="container-button">
                    <button
                        onClick={() => clearSearch()}
                        disabled={buttonFilter === "todos" ? true : false}
                    >Todos
                    </button>

                    <button
                        onClick={() => handleSearch('entrada')}
                        disabled={buttonFilter === "entrada" ? true : false}
                    >
                        Entradas
                    </button>
                        
                    <button
                        onClick={() => handleSearch('despesa')}
                        disabled={buttonFilter === "despesa" ? true : false}
                    >
                        Despesas
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filters