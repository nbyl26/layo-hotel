import React, { useEffect } from "react";
import "../styles/service.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSpa, faWaterLadder, faDumbbell, faSquarePhoneFlip, faBusinessTime} from "@fortawesome/free-solid-svg-icons";

import Restaurant from "../assets/images/Restaurant.jpg";
import Spa from "../assets/images/Spa.jpg";
import SwimmingPool from "../assets/images/Swimming-Pool.jpg";
import FitnessCenter from "../assets/images/Fitness-Center.jpg";
import RoomService from "../assets/images/Room-Service.jpg";
import ConferenceHall from "../assets/images/Conference-Hall.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; 

const ServiceComponent = () => {
    const services = [
        {
            name: "Restaurant",
            description: "Delicious meals served 24/7 with a variety of cuisines.",
            icon: faUtensils,
            image: Restaurant,
        },
        {
            name: "Spa & Wellness",
            description: "Relax and rejuvenate with our spa and wellness services.",
            icon: faSpa,
            image: Spa,
        },
        {
            name: "Swimming Pool",
            description: "Enjoy a refreshing swim in our outdoor pool.",
            icon: faWaterLadder,
            image: SwimmingPool,
        },
        {
            name: "Fitness Center",
            description: "State-of-the-art gym facilities to keep you fit.",
            icon: faDumbbell,
            image: FitnessCenter,
        },
        {
            name: "Room Service",
            description: "Order food and drinks to your room any time.",
            icon: faSquarePhoneFlip,
            image: RoomService,
        },
        {
            name: "Conference Room",
            description: "Fully equipped conference room for business meetings.",
            icon: faBusinessTime,
            image: ConferenceHall,
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,  
            once: true,    
            offset: 200,     
        });
    }, []);

    return (
        <div className="service-container">
            <h2 className="text-center mb-5 service-title">Our Premium Services</h2>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div 
                        className="service-card"
                        key={index}
                        data-aos="fade-up" 
                        data-aos-delay={`${index * 200}`}
                    >
                        <div className="service-image-container">
                            <img src={service.image} alt={service.name} className="service-image" />
                            <div className="service-overlay"></div>
                        </div>
                        <div className="service-details">
                            <i className="service-icon">
                                <FontAwesomeIcon icon={service.icon} />
                            </i>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;
