import React from "react";
import { Link } from "react-router-dom";
import "../styles/service.css"; // File CSS untuk styling khusus komponen ini

const ServiceComponent = () => {
    const services = [
        {
            name: "Restaurant",
            description: "Delicious meals served 24/7 with a variety of cuisines.",
            icon: "bi bi-egg-fried",
            link: "/restaurant",
        },
        {
            name: "Spa & Wellness",
            description: "Relax and rejuvenate with our spa and wellness services.",
            icon: "bi bi-heart",
            link: "/spa",
        },
        {
            name: "Swimming Pool",
            description: "Enjoy a refreshing swim in our outdoor pool.",
            icon: "bi bi-cloud-sun",
            link: "/pool",
        },
        {
            name: "Fitness Center",
            description: "State-of-the-art gym facilities to keep you fit.",
            icon: "bi bi-person-bounding-box",
            link: "/fitness",
        },
        {
            name: "Room Service",
            description: "Order food and drinks to your room any time.",
            icon: "bi bi-bag-check",
            link: "/room-service",
        },
        {
            name: "Conference Room",
            description: "Fully equipped conference room for business meetings.",
            icon: "bi bi-people",
            link: "/conference",
        },
    ];

    return (
        <div className="service-container py-5">
            <h2 className="text-center mb-5" style={{ color: "#007bff", fontWeight: "700" }}>
                Our Premium Services
                </h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="service-box">
                            <i className={`service-icon ${service.icon}`}></i>
                            <h3 className="service-title">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                            <Link to={service.link} className="btn btn-primary service-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;
