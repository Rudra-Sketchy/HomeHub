import "./Hero2.css";
import arrow_icon from "../Assets1/arrow.png";
import hand_remove from "../Assets1/hand-removebg-preview-mirrored.png";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1 style={{ color: "white" }}>
            Easy way to get several<br></br> household services
          </h1>

          <div className="hero-latest-btn">
            <div>Collaborate</div>
            <div className="icon">
              <img src={arrow_icon} alt=" " />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={hand_remove} alt=""/>
        </div>
      </div>
    </>
  );
}
export default Hero;
