import "./style.css"

function TotalMoney ({ listTransactions }) {
    
    const total = listTransactions.reduce((acc, price) => acc + Number(price.value), 0)

    return (
        <>
        <section className="container--money">
            <div className="container">
                <div className="container__money">
                    <div className='container__total-money'>
                        <p className='total-money__tittle'>Valor total</p>
                        <p className='total-money__value'>{ ` $ ${total}`}</p>
                    </div>
                    <p className="total-money__info">O valor se refere ao saldo</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default TotalMoney;