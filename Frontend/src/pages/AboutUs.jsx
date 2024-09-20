// src/components/AboutUs.js
import React from "react";
import "../styles/AboutUs.css";

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "CEO",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "CTO",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Carol White",
      role: "CFO",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]; // Example team members

  return (
    <div className="about-us">
      <section className="company-info">
        <h2>About Our Company</h2>
        <p>
          Our company has been a leader in the industry for over 20 years. We
          are committed to providing the best products and services to our
          customers. Our mission is to innovate and lead the way in technology,
          ensuring quality and satisfaction for all of our clients.
        </p>
        <p>
          Our core values are integrity, innovation, and excellence. We believe
          in doing business the right way, with a focus on sustainable growth
          and ethical practices.
        </p>
      </section>

      <section className="team-members">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
                loading="lazy"
                src={member.imageUrl}
                alt={member.name}
                className="team-member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Business Ave, Suite 100, Business City, BC 12345</p>
      </section>
    </div>
  );
}
