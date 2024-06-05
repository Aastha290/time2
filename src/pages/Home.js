import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/events", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch events");
          }
          return response.json();
        })
        .then((data) => setEvents(data))
        .catch((error) => console.error("Error fetching events:", error));
    } else {
      console.log("Token not available");
    }
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const eventListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const eventStyle = {
    width: "300px",
    margin: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    backgroundColor: "#fff",
    textAlign: "left",
  };

  const eventImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const formStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    width: "100%",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "#666",
    marginBottom: "10px",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="content" style={{ textAlign: "center" }}>
          <h3>
            From concept to creation, <span>we're here to make your</span>{" "}
            vision a spectacular <span>reality!</span>
          </h3>
          <div style={formStyle}>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              style={inputStyle}
            />
          </div>
          <div style={eventListStyle} className="event-list">
            {filteredEvents.map((event) => (
              <div key={event._id} style={eventStyle} className="event">
                <img
                  src={p1}
                  alt={`Event`}
                  style={eventImageStyle}
                  className="event-image"
                />
                <div className="event-details">
                  <h2 style={titleStyle}>{event.title}</h2>
                  <p style={descriptionStyle}>{event.description}</p>
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                  <p>Low Price: ${event.price.low}</p>
                  <p>Medium Price: ${event.price.mid}</p>
                  <p>High Price: ${event.price.high}</p>
                  <Link
                    to={`/book/${event._id}`}
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;