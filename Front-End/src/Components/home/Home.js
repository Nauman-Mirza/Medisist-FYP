import Footer from "./Footer";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Why from "./why";
import React from "react";
import ImageSlider from "./slider";
import Service1 from "./service1";
import Service2 from "./service2";
import Service3 from "./service3";
import Animation from "./animation";
import "./slider.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Cards from "./cards";

const Home = () => {
  const images = [
    'images/slider1.png',
    'images/slider2.jpg',
    'images/slider3.jpg',
    'images/slider4.jpg',
    'images/slider5.jpg',
  ];
  return (
    <div className="main-container" id="top">

      <div className="navbar1">
        <Navbar />
      </div>

      <div>
        <Welcome />
      </div>

      <div>
        <Why />
      </div>

      <ImageSlider images={images} interval={3000} />

      <div className="services">
      <h1 id="service-scroll">Our Services</h1>
      </div>

      <div>
        <Service1 />
      </div>

      <div>
        <Service2 />
      </div>

      <div>
        <Service3 />
      </div>
      <div>
        <Cards />
      </div>

      <div>
        <Animation />
      </div>
        
      <div >
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
