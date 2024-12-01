import React from "react";
import "../styles/service.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSpa, faWaterLadder, faDumbbell, faSquarePhoneFlip, faBusinessTime} from "@fortawesome/free-solid-svg-icons";

import Restaurant from "../assets/images/Restaurant.jpg";
import Spa from "../assets/images/Spa.jpg";
import SwimmingPool from "../assets/images/Swimming-Pool.jpg";
import FitnessCenter from "../assets/images/Fitness-Center.jpg";
import RoomService from "../assets/images/Room-Service.jpg";
import ConferenceHall from "../assets/images/Conference-Hall.jpg";

const ServiceComponent = () => {
    const services = [
        {
            name: "Restaurant",
            description: "Delicious meals served 24/7 with a variety of cuisines.",
            icon: faUtensils,
            image: Restaurant, // Ganti dengan gambar yang sesuai
        },
        {
            name: "Spa & Wellness",
            description: "Relax and rejuvenate with our spa and wellness services.",
            icon: faSpa,
            image: Spa, // Ganti dengan gambar yang sesuai
        },
        {
            name: "Swimming Pool",
            description: "Enjoy a refreshing swim in our outdoor pool.",
            icon: faWaterLadder,
            image: SwimmingPool, // Ganti dengan gambar yang sesuai
        },
        {
            name: "Fitness Center",
            description: "State-of-the-art gym facilities to keep you fit.",
            icon: faDumbbell,
            image: FitnessCenter, // Ganti dengan gambar yang sesuai
        },
        {
            name: "Room Service",
            description: "Order food and drinks to your room any time.",
            icon: faSquarePhoneFlip,
            image: RoomService, // Ganti dengan gambar yang sesuai
        },
        {
            name: "Conference Room",
            description: "Fully equipped conference room for business meetings.",
            icon: faBusinessTime,
            image: ConferenceHall, // Ganti dengan gambar yang sesuai
        },
    ];

    return (
        <div className="service-container py-5">
            <h2 className="text-center mb-5" style={{ color: "#007bff", fontWeight: "700" }}>
                Our Premium Services
            </h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="service-box">
                            <img src={service.image} alt={service.name} className="service-image" />
                            <div className="overlay"></div>
                            <i className="service-icon">
                                <FontAwesomeIcon icon={service.icon} />
                            </i>
                            <h3 className="service-title">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;
