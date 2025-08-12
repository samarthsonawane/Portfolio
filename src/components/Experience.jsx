import React from "react";
import "../styles/experience.css";

function Experience() {
  const experienceData = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      details:
        "Building modern, responsive web applications using React, Tailwind CSS, and REST APIs."
    },
    {
      year: "2023 - 2024",
      role: "Web Developer Intern",
      company: "Creative Web Studio",
      details:
        "Worked on UI/UX design improvements, optimized performance, and implemented SEO strategies."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos="fade-up"
            key={index}
          >
            <div className="content">
              <span className="year">{exp.year}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
