import "./Landing.css"
import aiHand from "../../assets/landing.png"
import { CiDiscount1 } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="discount">
          <p><CiDiscount1 /><div><span>20%</span> discount for <span>1 Month</span> account</div></p>
        </div>

        <div className="desc">
          <h1>The Next<br/><span>Generation</span><br/>Payment Method.</h1>
          <p>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
              We examine annual percentage rates, annual fees.
          </p>
        </div>

        <div className="light"></div>
        <div className="btn">
          <p>Get<MdArrowOutward /> Started</p>
        </div>
      </div>
        <div className="right">
          <img src={aiHand} alt="" />
        </div>

      
    </div>
  )
}

export default Landing