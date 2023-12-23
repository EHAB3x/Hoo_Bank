import "./Card.css";
import card from "../../assets/card.png"
const Card = () => {
  return (
    <div>
        <div className="card">

        <div className="left">
                <div className="desc">
                    <h2>Find a better card deal <br />in few easy steps.</h2>
                    <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                </div>
                <button>Get Started</button>
        </div>
        <div className="right">
            <img src={card} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Card