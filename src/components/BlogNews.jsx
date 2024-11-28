import React from "react";
import "../styles/blog.css";

const BlogNews = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tips for a Relaxing Stay at Layo-Hotel",
      excerpt:
        "Discover how to elevate your experience with these 5 essential tips. Comfort and luxury await you...",
      image: "/path-to-image1.jpg", // Update dengan path gambar Anda
      date: "November 28, 2024",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "Local Events You Can't Miss This Month",
      excerpt:
        "Immerse yourself in the vibrant culture and events happening near Layo-Hotel this month...",
      image: "/path-to-image2.jpg", // Update dengan path gambar Anda
      date: "November 25, 2024",
      category: "Events",
    },
    {
      id: 3,
      title: "Why Layo-Hotel is Perfect for Families",
      excerpt:
        "Looking for the perfect family getaway? Learn why Layo-Hotel is the ultimate destination for everyone...",
      image: "/path-to-image3.jpg", // Update dengan path gambar Anda
      date: "November 20, 2024",
      category: "Family Travel",
    },
  ];

  return (
    <div className="blog-news-section py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            color: "#007bff",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Latest Blog & News
        </h2>
        <p
          className="text-center mb-5"
          style={{
            fontSize: "1rem",
            color: "#555",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Stay updated with our latest articles, tips, and news designed to enhance your stay
          and make your visit unforgettable.
        </p>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  className="card-img-container"
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {article.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "0.95rem",
                      color: "#555",
                      marginBottom: "1rem",
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <small
                    className="text-muted"
                    style={{
                      fontSize: "0.85rem",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    {article.date} | {article.category}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
