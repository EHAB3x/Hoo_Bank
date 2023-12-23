import './Rates.css'
import { BiSolidQuoteLeft } from "react-icons/bi";
import userOne from "../../assets/Rate1.png"
import userTwo from "../../assets/Rate2.png"
import userThree from "../../assets/Rate3.png"

const Rates = () => {
  return (
    <div className='rates'>
        <div className="top">
            <h2>What people are <br /> saying about us</h2>
            <p>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
        </div>

        <div className="bottom">
            <div className="rate active">
                <BiSolidQuoteLeft />
                <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                
                <div className="details">
                    <img src={userOne} alt="" />
                    <div className="data">
                        <h4>Herman Jensen</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>

            <div className="rate">
                <BiSolidQuoteLeft />
                <p>Money makes your life easier. If you are lucky to have it, you are lucky.</p>
                
                <div className="details">
                    <img src={userTwo} alt="" />
                    <div className="data">
                        <h4>Steve Mark</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>

            <div className="rate">
                <BiSolidQuoteLeft />
                <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
                
                <div className="details">
                    <img src={userThree} alt="" />
                    <div className="data">
                        <h4>Kenn Gallagher</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="light-blue"></div>
    </div>
  )
}

export default Rates