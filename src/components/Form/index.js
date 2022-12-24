import './style.css'

function Form ({ handleSubmit, setFormData, formData }) {


    return (

        <article className='container-form'>
            <div className="container">
                
                <form 
                    onSubmit={handleSubmit}
                    >

                    <label className='form__label--description'>Descrição</label>
                    <input
                        className='form__input--description'
                        name='description' 
                        type='text' 
                        placeholder='Digite aqui sua descrição'
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                    <p className='form__tittle'>Ex: Compra de roupas</p>

                    <div className='form__container__labels'>
                        <label className='form__label--value'>Valor</label>
                        <label className='form_label--type-value'>Tipo de valor</label>
                    </div>

                    <div className='container__form'>
                        <div className='form__container__value'>
                            <input
                                className='form__input--value'
                                name='value'
                                type="number"
                                placeholder='1'
                                value={formData.value}
                                required
                                onChange={(e) => setFormData({...formData, value: Number(e.target.value)})}
                            />
                            <p >R$</p>
                        </div>
                        <div className='container__form__select'>
                            <select className='select'
                                value={formData.type}
                                onChange={(e) => setFormData({...formData, type: e.target.value})}
                                name='select'
                                >
                                <option value="">Tipo de Entrada</option>
                                <option value="entrada">Entrada</option>
                                <option value="despesa">Despesa</option>
                            </select>
                        </div>  
                    </div>
                    <button 
                        className='button-insert'
                        disabled={!formData.type || !formData.description || !formData.value || formData.value < 0 ? true : false}
                    >Inserir
                    </button>
                </form>
            </div>
        </article>
    )
}
export default Form;