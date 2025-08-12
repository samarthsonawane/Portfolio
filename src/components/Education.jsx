import React from "react";
import "../styles/education.css";

function Education() {
  const educationData = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABC University, Your City",
      details:
        "Focused on web development, data structures, algorithms, and software engineering principles."
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary School (Science)",
      institution: "XYZ High School",
      details:
        "Specialized in Mathematics and Physics with strong academic performance."
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 data-aos="fade-up">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos="fade-up"
            key={index}
          >
            <div className="content">
              <span className="year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
