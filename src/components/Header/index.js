import './style.css'
import logoWhite from '../../assets/logoWhite.svg';


const Header = ({ setLogin }) => {
  return (
    <header className='Header'>
      <div className="container">
        <div className='Header-flex'>
          <img src={logoWhite} alt="Logo Kenzie" />
          <button onClick={() => setLogin(false)}>Inicio</button>
        </div>
      
      </div>
    </header>
  )
}

export default Header