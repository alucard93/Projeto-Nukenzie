import React from 'react'
import { FaTrash } from "react-icons/fa";
import './style.css'

const Card = ({ transaction, removeTransaction }) => {
  return (
    <div className="card-background">
        <div className="container">
            <div 
                className={
                    transaction.type === "Entrada"
                    ? "container-salary"
                    : "container-salary-exit"
                }
                >
                <h3 className="container-salary__tittle"> {transaction.description} </h3>
                <p className="container-salary__entry">{transaction.type}</p>
                <p className="container__salary">{transaction.value}</p>
                <button className="btn-delete" onClick={() => removeTransaction(transaction)}>
                    <FaTrash/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card