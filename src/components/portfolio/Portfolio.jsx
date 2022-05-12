import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    title: "ICE CREAM - My first team project (HTML, CSS, JavaScript)",
    github: "https://github.com/Vlad-Star91/ice-cream-creativity-proj",
    demo: "https://byshov92.github.io/ice-cream-creativity-proj/",
  },
  {
    id: 2,
    title: "Filmoteka - Movie search service! (HTML, CSS, JavaScript) ",
    github: "https://github.com/Vlad-Star91/filmoteka",
    demo: "https://hrendzha.github.io/filmoteka/",
  },
  {
    id: 3,
    title:
      "Wallet - Finance App (JavaScript, React.js, Redux, Node.js, MongoDB)",
    github: "https://github.com/Vlad-Star91/dementors-wallet-project",
    demo: "https://nostalgic-austin-c31fb8.netlify.app/",
  },
  {
    id: 4,
    title: "Phonebook App(JavaScript, React.js, Redux)",
    github: "https://github.com/Vlad-Star91/goit-react-hw-08-phonebook",
    demo: "https://svn-phonebook.netlify.app/",
  },
  {
    id: 5,
    title: "Movies Search Service (JavaScript, React.js, RestAPI)",
    github: "https://github.com/Vlad-Star91/goit-react-hw-05-movies",
    demo: "https://svn-netlify-app.netlify.app/",
  },
  {
    id: 6,
    title: "Image Finder (JavaScript, React.js, RestAPI)",
    github: "https://github.com/Vlad-Star91/goit-react-hw-03-image-finder",
    demo: "https://vlad-star91.github.io/goit-react-hw-03-image-finder/",
  },
  {
    id: 7,
    title: "Feedback (JavaScript, React.js)",
    github: "https://github.com/Vlad-Star91/goit-react-hw-02-feedback",
    demo: "https://vlad-star91.github.io/goit-react-hw-02-feedback/",
  },
  {
    id: 8,
    title: "Countries information (HTML, CSS, JavaScript, RestAPI)",
    github: "https://github.com/Vlad-Star91/goit-js-hw-12-countries",
    demo: "https://vlad-star91.github.io/goit-js-hw-12-countries/",
  },
  {
    id: 9,
    title: "Timer (HTML, CSS, JavaScript)",
    github: "https://github.com/Vlad-Star91/goit-js-hw-11-timer",
    demo: "https://vlad-star91.github.io/goit-js-hw-11-timer/",
  },
  {
    id: 10,
    title: "Food Service (HTML, CSS, JavaScript)",
    github: "https://github.com/Vlad-Star91/goit-js-hw-10-food-service",
    demo: "https://vlad-star91.github.io/goit-js-hw-10-food-service/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                {/* <div className="portfolio__item-image">
                  <img srс={ice} alt={title} />
                </div> */}
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
