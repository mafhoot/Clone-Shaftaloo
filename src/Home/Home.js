import React from "react";
// import "./home.css";
import "./home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <video
        className="homeVideoIntro"
        autoPlay
        muted
        loop
      >
        <source src="assets/home-intro.mp4" type="video/mp4" />
        Your browser is not supported
      </video>
      <div className="homeDetails">
        <div className="container">
          <div className="row">
            <div className="slogan">
              <h1 className="rte">Restaurant</h1>
              <p className="uuuuuu" style={{color:'white'}}>Try the best food of the week.</p>
              <div>
                <a href="" ><button style={{color:'white'}}>Order Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
