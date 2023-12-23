import "./Control.css"
import invoice from "../../assets/control.png";
import appStore from "../../assets/appStore.svg";
import googlePlay from "../../assets/googlePlay.svg";
const Control = () => {
  return (
    <div className="control">
        <div className="left">
            <img src={invoice} alt="" />
        </div>

        <div className="right">
            <div className="desc">
                <h2>Easily control your <br /> billing & invoicing.</h2>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            </div>
            <div className="stores">
                <img src={appStore} alt="" />
                <img src={googlePlay} alt="" />
            </div>
        </div>
        <div className="light"></div>
    </div>
  )
}

export default Control