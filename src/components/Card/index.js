import React from 'react'
import { FaTrash } from "react-icons/fa";
import './style.css'

const Card = ({ transaction, removeTransaction }) => {
  return (
    <div className="card-background">
        <div className="container">
            <div className={
                    transaction.type === "entrada"
                    ? 
                    "container-salary"
                    : 
                    "container-salary-exit"
                }
                ><div className="container-salary--title">
                  <h3 className="container-salary__tittle"> {transaction.description} </h3>
                  <p className="container-salary__entry">{transaction.type}</p>
                </div>
                <div className="container-salary--button">
                  <p className="container__salary">R$ {Math.abs(transaction.value)},00</p>
                  <button className="btn-delete" onClick={() => removeTransaction(transaction)}>
                      <FaTrash/>
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card