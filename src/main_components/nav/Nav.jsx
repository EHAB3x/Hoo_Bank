import logo from '../../assets/logo.png';
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <div className='left'>
            <img src={logo} alt="logo"/>
            <p>Hoo<span>Bank</span></p>
        </div>
        <div className='right'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#solution">Solution</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav