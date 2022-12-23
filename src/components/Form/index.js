import {useState} from 'react'
import './style.css'

function Form ({ listTransactions, setListTransactions }) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('')
    const [id, setId] = useState(0)


    function handleClick () {
        
        const newTransaction = { description, value, type, id }
        if(newTransaction.type === 'Saída') {
            newTransaction.value *= -1
        }
        setId(id + 1)
        setListTransactions([...listTransactions, newTransaction])
        
    }
    
    return (

        <article className='container-form'>
            <div className="container">
                
                <form onSubmit={(e) => e.preventDefault()}>
                    <label className='form__label--description'>Descrição</label>
                    <input
                        className='form__input--description'
                        name='description'
                        type="text"
                        value={description}
                        placeholder='Digite aqui sua descrição'
                        required
                        onChange={e => setDescription(e.target.value)}
                    />
                    <p className='form__tittle'>Ex: Compra de roupas</p>
                    <div>
                        <div className='form__container__labels'>
                            <label className='form__label--value'>Valor</label>
                            <label className='form_label--type-value'>Tipo de valor</label>
                        </div>
                        <div className='container__form'>
                            <div className='form__container__value'>
                                <input
                                className='form__input--value'
                                name='valor'
                                type="number"
                                placeholder='1'
                                required
                                onChange={(e) => setValue(e.target.value)}
                                />
                                <p >R$</p>
                            </div>
                            <div className='container__form__select'>
                                <select className='select'
                                    value={type}
                                    onChange={e => setType(e.target.value )}
                                    name='select'
                                    >
                                    <option value="">Tipo de Entrada</option>
                                    <option value="Entrada">Entrada</option>
                                    <option value="Saída">Saída</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className='button-insert'
                    disabled={!type || !description || !value ? true : false}
                    onClick= { handleClick }>Inserir
                    </button>
                </form>
            </div>
        </article>
    )
}
export default Form;