import "./Partners.css"
import partnerOne from "../../assets/partner1.png"
import partnerTwo from "../../assets/partner2.png"
import partnerThree from "../../assets/partner3.png"
import partnerFour from "../../assets/partner4.png"
const Partners = () => {
  return (
    <div className="partners">
        <img src={partnerOne} alt="" />
        <img src={partnerTwo} alt="" />
        <img src={partnerThree} alt="" />
        <img src={partnerFour} alt="" />
    </div>
  )
}

export default Partners