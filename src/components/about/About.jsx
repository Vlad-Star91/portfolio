import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Aboute image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years learning</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>I don't have clients yet</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10 completed projects</small>
            </article>
          </div>
          <p>
            I am a Front-End developer looking for a full-time position in a
            company that's aimed at making both everyday life and business
            easier, more productive and user-friendly. I have sound knowledge of
            HTML, CSS, JavaScript, React and Node.js. Also, I have hands-on
            experience in following Agile /Scrum methodology when working in a
            team. I am a fast learner, responsible, and ready for challenging
            tasks
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
