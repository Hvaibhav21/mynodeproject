import React, { useState, useEffect } from "react";
import "./Homepage.css"; // Import CSS for styling

const images = [
  "/images/solar1.jpg",
  "/images/solar2.jpg",
  "/images/solar3.jpg",
];

const Homepage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="content">
          <h1>Welcome to Our Solar Solutions</h1>
          <p>Leading the way in sustainable energy</p>
          <button className="cta-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
