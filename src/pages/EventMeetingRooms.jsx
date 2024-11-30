import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoomImage1 from "../assets/images/Meeting-Room.jpg";
import RoomImage2 from "../assets/images/Conference-Hall.jpg";
import RoomImage3 from "../assets/images/Wedding-Ballroom.jpg";

const EventMeetingRooms = () => {
    const [fadeIn, setFadeIn] = useState(false);

    React.useEffect(() => {
        setTimeout(() => setFadeIn(true), 200);
    }, []);

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

    const rooms = [
        { name: 'Meeting Room 1', capacity: 25, price: 'Rp 7.000.000/day', description: 'Ideal for small meetings', image: RoomImage1 },
        { name: 'Conference Hall', capacity: 100, price: 'Rp 30.000.000/day', description: 'Perfect for conferences or large events', image: RoomImage2 },
        { name: 'Wedding Ballroom', capacity: 300, price: 'Rp 100.000.000/day', description: 'Spacious ballroom for weddings and receptions', image: RoomImage3 }
    ];

    return (
        <div className="container py-5" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8f9fa" }}>
            {/* Header Section */}
            <h2 className={`text-center mb-5 ${fadeIn ? "fade-in" : ""}`} style={{ color: "#007bff", fontWeight: "800", fontSize: "3rem", letterSpacing: "2px" }}>
                Event & Meeting Rooms
            </h2>

            {/* Overview Section */}
            <div className="text-center mb-5">
                <p className={`lead ${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "#555", lineHeight: "1.8" }}>
                    Layo-Hotel menawarkan berbagai ruang untuk berbagai acara bisnis, pertemuan, konferensi, serta acara sosial seperti pernikahan. Dilengkapi dengan fasilitas modern dan layanan profesional, kami pastikan acara Anda berjalan lancar dan sukses.
                </p>
            </div>

            {/* Image Slider Section */}
            <div className="mt-5 mb-5">
                <Slider {...settings}>
                    {rooms.map((room, index) => (
                        <div key={index}>
                            <img
                                src={room.image}
                                alt={room.name}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover",
                                    borderRadius: "15px",
                                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.5s ease-in-out",
                                }}
                                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Rooms Available Section */}
            <div className="row justify-content-center">
                {rooms.map((room, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow-lg border-0 rounded-3" style={{ overflow: "hidden", transition: "transform 0.3s ease-in-out" }}>
                            <img src={room.image} alt={room.name} className="card-img-top" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title text-center" style={{ color: "#007bff", fontSize: "1.5rem", fontWeight: "700" }}>{room.name}</h5>
                                <p className="card-text text-center">{room.description}</p>
                                <p className="card-text text-center"><strong>Capacity:</strong> {room.capacity} people</p>
                                <p className="card-text text-center"><strong>Price:</strong> {room.price}</p>
                                <a href="/booking" className="btn btn-primary d-block mx-auto mt-3" style={{ backgroundColor: "#007bff", borderRadius: "30px", padding: "10px 30px", fontWeight: "600" }}>
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Our Commitment Section */}
            <div className="text-center mt-5">
                <h3 className={`mt-4 ${fadeIn ? "fade-in" : ""}`} style={{ color: "#007bff", fontWeight: "700", fontSize: "2rem", marginBottom: "20px" }}>
                    Our Commitment
                </h3>
                <p className={`mx-auto ${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "700px", fontSize: "1.2rem", color: "#555", lineHeight: "1.8", animationDelay: "0.6s" }}>
                    Kami berkomitmen untuk memberikan pengalaman terbaik bagi setiap acara yang Anda adakan di Layo-Hotel, dengan fasilitas lengkap, layanan profesional, dan suasana yang mendukung kesuksesan acara Anda.
                </p>
            </div>

            {/* Pricing & Packages Section */}
            <div className="pricing-section text-center mt-5">
                <h4 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "700", fontSize: "1.8rem" }}>
                    Our Pricing & Packages
                </h4>
                <p className="lead mb-4" style={{ fontSize: "1.1rem", color: "#555", maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
                    Di Layo-Hotel, kami menawarkan harga yang kompetitif untuk ruang acara dan pertemuan kami yang sesuai untuk berbagai jenis acara, mulai dari pertemuan bisnis kecil, konferensi besar, hingga pernikahan megah. Paket kami dirancang untuk memberikan nilai terbaik dengan layanan dan fasilitas luar biasa yang kami sediakan.
                </p>

                {/* Price Cards */}
                <div className="row justify-content-center">
                    {rooms.map((room, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card border-0 shadow-lg rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover", borderRadius: "15px" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{ color: "#007bff", fontSize: "1.5rem", fontWeight: "700" }}>
                                        {room.name}
                                    </h5>
                                    <p className="card-text text-center">{room.description}</p>
                                    <p className="card-text text-center">
                                        <strong>Capacity:</strong> {room.capacity} people
                                    </p>
                                    <p className="card-text text-center" style={{ fontSize: "1.2rem", fontWeight: "600", color: "#28a745" }}>
                                        <strong>Price:</strong> {room.price}
                                    </p>
                                    <div className="text-center mt-4" style={{ fontSize: "1rem", color: "#555" }}>
                                        <p>Paket mencakup:</p>
                                        <ul style={{ listStyleType: "none", padding: "0" }}>
                                            <li>Wi-Fi berkecepatan tinggi</li>
                                            <li>Peralatan audio-visual</li>
                                            <li>Layanan koordinasi acara</li>
                                            <li>Minuman ringan (atas permintaan)</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="additional-info mt-5" style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.2rem", color: "#555", lineHeight: "1.8" }}>
                    <h5 style={{ color: "#007bff", fontWeight: "700" }}>Why Choose Us?</h5>
                    <p>
                        Di Layo-Hotel, kami berkomitmen untuk memberikan pengalaman yang luar biasa untuk setiap acara yang Anda adakan. Tim profesional kami memastikan setiap detail acara Anda terkelola dengan baik, mulai dari kedatangan hingga acara selesai. Kami berusaha untuk melampaui harapan Anda dan memberikan nilai luar biasa dalam setiap paket yang kami tawarkan.
                    </p>
                </div>
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

export default EventMeetingRooms;
