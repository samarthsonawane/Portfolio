import React from "react";
import Slider from "react-slick";
import "../styles/projects.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects using React and Tailwind.",
      img: "/portfolio.png",
      link: "https://your-portfolio-link.com"
    },
    {
      title: "E-Commerce App",
      description: "A modern online store built with MERN stack and Stripe payment integration.",
      img: "/ecommerce.png",
      link: "https://your-ecommerce-link.com"
    },
    {
      title: "Weather App",
      description: "Real-time weather data fetching using OpenWeather API and React.",
      img: "/weather.png",
      link: "https://your-weather-link.com"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-carousel" data-aos="fade-up">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
