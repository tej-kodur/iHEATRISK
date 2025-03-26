import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';

// Example images for each team member
import person1 from './assets/coming_soon.jpeg';
import person2 from './assets/coming_soon.jpeg';
import person3 from './assets/coming_soon.jpeg';
import person4 from './assets/coming_soon.jpeg';
import person5 from './assets/coming_soon.jpeg';
import person6 from './assets/coming_soon.jpeg';



function About() {
  // US-based team
  const usTeam = [
    { name: 'Anuj Tiwari', role: 'Lead (US) - Analytics', image: person1 },
    { name: 'Andrew Boyd', role: 'UIC Professor', image: person2 },
    { name: 'Diana Contreras', role: 'UIC Research (AI Modeling)', image: person3 }
  ];

  // UK-based team
  const ukTeam = [
    { name: 'Amir Javed', role: 'Cardiff University - Modeling', image: person4 },
    { name: 'Sophie Reeve', role: 'CU Student Developer', image: person5 },
    { name: 'Joseph Johnston', role: 'App Development', image: person6 }
  ];

  // Acknowledgment
  const ackTeam = [
    { name: 'Jane Doe', role: 'Advisory Board', image: person1 },
    { name: 'John Smith', role: 'Senior Advisor', image: person2 }
  ];

  return (
    <div className="about-page">
      <Header />

      <div className="about-container">
        <h2 className="main-heading">Meet the Team</h2>

        <div className="team-sections">
          {/* US-Based */}
          <section className="team-section left">
            <h3>US-Based</h3>
            <div className="team-grid">
              {usTeam.map((member, idx) => (
                <div className="team-card" key={idx}>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* UK-Based */}
          <section className="team-section right">
            <h3>UK-Based</h3>
            <div className="team-grid">
              {ukTeam.map((member, idx) => (
                <div className="team-card" key={idx}>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Acknowledgment */}
        <section className="team-section ack-section">
          <h3>Acknowledgment</h3>
          <div className="team-grid">
            {ackTeam.map((member, idx) => (
              <div className="team-card" key={idx}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;