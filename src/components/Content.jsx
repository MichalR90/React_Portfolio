import "../styles/Content.css";
import photo from "../assets/photo.png";
import html from "../assets/icons8-html-96.svg";
import css from "../assets/icons8-css.svg";
import js from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";

function Content({ activeSection }) {
  return (
    <>
      <div className="content">
        {/* activeSection Home */}
        {activeSection === "home" && (
          <div className="content-description-container">
            <div className="content-description-container-title">
              <span>Home</span>
            </div>
            <div className="content-description-container-text">
              <span className="content-description-container-text-home-section-first">
                I'm Michał Rutkowski
              </span>
              <span className="content-description-container-text-home-section-two">
                Frontend developer
              </span>
            </div>
          </div>
        )}
        {/* activeSection About*/}
        {activeSection === "about" && (
          <div className="content-description-container-about">
            <div className="content-description-container-title">
              <span>About me</span>
            </div>
            <div className="content-description-container-text">
              <span className="content-description-container-text-about-section-first">
                My name is Michał. I am someone who enjoys learning new things.
                By profession, I am a ship mechanic and graduated from a naval
                school. I accidentally started learning programming when I
                became curious about how computer games were created. The first
                language I learned was C++, but I realized I wanted to see my
                work in a browser window, so I became interested in front-end
                development. I have no commercial experience; I am a self-taught
                developer who has been learning programming since 2020. I have
                mainly worked with JavaScript, CSS, HTML, and REACT.JS. Besides
                programming, I am also self-taught in construction and have been
                building a house with the help of tutorials. I handle tasks
                related to electricity, mechanics, plumbing, and all kinds of
                renovations and minor repairs. As a hobby, I enjoy cooking,
                traveling, and learning about different cultures. I am always
                open to learning new things. I guess that’s all!
              </span>
            </div>
          </div>
        )}

        {/* activeSection Skills */}
        {activeSection === "skills" && (
          <div className="content-description-container">
            <div className="content-description-container-title">
              <span>Skills</span>
            </div>
            <div className="content-description-container-text">
              <span className="content-description-container-text-skills-section-first">
                <div className="content-icon-container-html">
                  <img src={html} alt="html"></img>
                  <span>HTML</span>
                </div>
                <div className="content-icon-container-css">
                  <img src={css} alt="css"></img>
                  <span>CSS</span>
                </div>
                <div className="content-icon-container-js">
                  <img src={js} alt="JS"></img>
                  <span>JS</span>
                </div>
                <div className="content-icon-container-react">
                  <img src={react} alt="react"></img>
                  <span>REACT.JS</span>
                </div>
              </span>
            </div>
          </div>
        )}

        {/* activeSection Projects */}
        {activeSection === "projects" && (
          <div className="content-description-container">
            <div className="content-description-container-title">
              <span>Projects</span>
            </div>
            <div className="content-description-container-text">
              <span className="content-description-container-text-projects-section-first">
                The main projects I worked on helped me master the fundamentals
                of programming languages, frameworks, and various concepts
                essential for front-end development. These included data
                fetching, array and object operations, and basic asynchronous
                programming.
              </span>

              <span className="content-description-container-text-projects-section-first">
                {" "}
                <a href="https://github.com/MichalR90"> Click to my Github !</a>
              </span>
            </div>
          </div>
        )}

        {/* activeSection Contact */}
        {activeSection === "contact" && (
          <div className="content-description-container">
            <div className="content-description-container-title">
              <span>Contact</span>
            </div>
            <div className="content-description-container-text">
              <span className="content-description-container-text-contact-section-first">
                <a href="tel: +48784455771">+48 784 455 771</a>
              </span>
              <span className="content-description-container-text-contact-section-two">
                <a href="mailto:michalrutkowski90@wp.pl">
                  michalrutkowski90@wp.pl
                </a>
              </span>
            </div>
          </div>
        )}

        <div className="content-img-container">
          <img src={photo}></img>
        </div>
      </div>
    </>
  );
}
export default Content;
