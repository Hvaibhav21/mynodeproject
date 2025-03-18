import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Powering the Future with Solar Energy</h1>
        <p>Join us in creating a sustainable tomorrow</p>
        <Link to="/enquiry" className="btn">Get a Free Quote</Link>
      </header>

      <section className="services-preview">
        <h2>Our Services</h2>
        <p>We provide top-quality solar panel installation and maintenance.</p>
        <Link to="/services" className="btn">Explore Services</Link>
      </section>

      <section className="testimonials-preview">
        <h2>What Our Clients Say</h2>
        <p>See how we've helped businesses and homeowners switch to solar.</p>
        <Link to="/testimonials" className="btn">Read Testimonials</Link>
      </section>
    </div>
  );
};

export default Home;
