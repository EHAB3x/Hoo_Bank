import './Footer.css'
import logo from "../../assets/footerLogo.svg"
import { FaInstagram , FaFacebook , FaTwitter, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className='top'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>

            <div className="links">
                <div className="list">
                    <h3>Useful links</h3>
                    <ul>
                        <li>Content</li>
                        <li>How it Works</li>
                        <li>Create</li>
                        <li>Explore</li>
                        <li>Terms & Services</li>
                    </ul>
                </div>

                <div className="list">
                    <h3>Community</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Suggestions</li>
                        <li>Blog</li>
                        <li>Newsletters</li>
                    </ul>
                </div>

                <div className="list">
                    <h3>Partner</h3>
                    <ul>
                        <li>Our Partner</li>
                        <li>Become a Partner</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="copyright">
                <p>Copyright &copy; 2021 HooBank. All Rights Reserved</p>
            </div>

            <div className="media">
                <ul>
                    <li><FaInstagram /></li>
                    <li><FaFacebook /></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedin/></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer