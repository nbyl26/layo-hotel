import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import React-Slick
import LobbyHotel1 from "../assets/images/bg-hotel1.png";
import LobbyHotel2 from "../assets/images/bg-hotel2.png";
import LobbyHotel3 from "../assets/images/bg-hotel3.png";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Efek fade-in
  }, []);

  // Settings for React-Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div
      className="container-about my-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
        borderRadius: "15px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <h2
        className={`text-center mb-4 ${fadeIn ? "fade-in" : ""}`}
        style={{
          color: "#007bff",
          fontWeight: "800",
          fontSize: "2.5rem",
          letterSpacing: "1px",
        }}
      >
        About Us
      </h2>

      {/* Description */}
      <p
        className={`text-center mx-auto ${fadeIn ? "fade-in" : ""}`}
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "30px",
          animationDelay: "0.3s",
        }}
      >
        Layo-Hotel adalah tempat di mana kemewahan bertemu kenyamanan. Kami menawarkan
        pengalaman tak terlupakan dengan layanan kelas dunia, kamar mewah, dan suasana
        yang ramah. Setiap tamu adalah prioritas kami, dan kami berkomitmen untuk memberikan
        yang terbaik di setiap kunjungan Anda.
      </p>

      {/* Image Slider */}
      <div
        className="image-slider mt-4"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Slider {...settings}>
          {[LobbyHotel1, LobbyHotel2, LobbyHotel3].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "450px", // Ukuran default untuk gambar
                  objectFit: "cover", // Menyesuaikan gambar dengan container
                  borderRadius: "15px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Our Commitment Section */}
      <div className="text-center mt-4">
        <h3
          className={`mt-4 ${fadeIn ? "fade-in" : ""}`}
          style={{
            color: "#007bff",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Our Commitment
        </h3>
        <p
          className={`mx-auto ${fadeIn ? "fade-in" : ""}`}
          style={{
            maxWidth: "700px",
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.8",
            animationDelay: "0.6s",
          }}
        >
          Di Layo-Hotel, kami berkomitmen untuk memastikan setiap pengalaman tamu tidak
          terlupakan. Dengan fasilitas modern dan layanan terbaik, kami menciptakan
          lingkungan yang nyaman, aman, dan menyenangkan untuk Anda.
        </p>
      </div>

      {/* Decorative Divider */}
      <div
        style={{
          height: "5px",
          width: "80px",
          background: "linear-gradient(90deg, #007bff, #28a745)",
          margin: "30px auto",
          borderRadius: "50px",
        }}
      ></div>
    </div>
  );
};

export default About;
