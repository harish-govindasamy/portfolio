import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
              <p>
                I’m a Frontend Developer from Tamil Nadu, India, with a deep
                passion for crafting beautiful and functional web experiences.
                Ever since I started coding, I’ve been fascinated by how design
                and technology come together to create seamless digital
                interactions.
              </p>
            <p>
              I love working on projects that challenge me to think creatively
              and push boundaries. Whether it's designing a smooth, responsive
              UI or optimizing performance for a flawless user experience, I’m
              always excited to dive in.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>30+</h1>
          <p>TASKS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
export default About;
