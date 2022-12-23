import './style.css'
import logoWhite from '../../assets/logoWhite.svg';


const Header = () => {
  return (
    <header className='Header'>
      <div className="container">
        <div className='Header-flex'>
          <img src={logoWhite} alt="Logo Kenzie" />
          <button>Inicio</button>
        </div>
      </div>
    </header>
  )
}

export default Header