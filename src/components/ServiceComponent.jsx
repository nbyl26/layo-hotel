import React from "react";
import "../styles/service.css"; // File CSS untuk styling khusus komponen ini

const ServiceComponent = () => {
    const services = [
        {
            name: "Restaurant",
            description: "Delicious meals served 24/7 with a variety of cuisines.",
            icon: "bi bi-egg-fried",
        },
        {
            name: "Spa & Wellness",
            description: "Relax and rejuvenate with our spa and wellness services.",
            icon: "bi bi-heart",
        },
        {
            name: "Swimming Pool",
            description: "Enjoy a refreshing swim in our outdoor pool.",
            icon: "bi bi-cloud-sun",
        },
        {
            name: "Fitness Center",
            description: "State-of-the-art gym facilities to keep you fit.",
            icon: "bi bi-person-bounding-box",
        },
        {
            name: "Room Service",
            description: "Order food and drinks to your room any time.",
            icon: "bi bi-bag-check",
        },
        {
            name: "Conference Room",
            description: "Fully equipped conference room for business meetings.",
            icon: "bi bi-people",
        },
    ];

    return (
        <div className="service-container py-5">
            <h2 className="text-center mb-5" style={{ color: "#007bff", fontWeight: "700" }}>
                Our Premium Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="service-box">
                            <i className={`service-icon ${service.icon}`}></i>
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
