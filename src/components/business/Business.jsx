import "./Business.css"
import { FaStar } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
const Business = () => {
  return (
    <div className="business">
        <div className="left">
            <h2>You do the business,<br />we’ll handle the money.</h2>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button>Get Started</button>
        </div>

        <div className="right">
            <div className="feature">
                <div className="left">
                    <FaStar />
                </div>
                <div className="right">
                    <h4>Rewards</h4>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>

            <div className="feature">
                <div className="left">
                    <SiSpringsecurity />
                </div>
                <div className="right">
                    <h4>100% Secured</h4>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>

            <div className="feature">
                <div className="left">
                    <FaTelegramPlane /> 
                </div>
                <div className="right">
                    <h4>Balance Transfer</h4>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business