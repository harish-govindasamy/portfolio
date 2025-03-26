import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Harish Govindasamy,</span> Frontend Developer based in India.
      </h1>
      <p>
        I'm a Passionate Frontend Developer from Tamil Nadu, India, with a
        strong foundation in web technologies. Eager to apply my skills in
        designing and developing user-friendly, responsive, and visually
        appealing web applications. Seeking an opportunity to contribute
        innovative solutions while continuously learning and growing in a
        dynamic work environment.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume"> <AnchorLink href="https://docs.google.com/document/d/1FVDNlNwISnNdsx_WsxTHmdib3DkQAuVI/edit?usp=sharing&ouid=107497870162729650366&rtpof=true&sd=true" target="_blank">My Resume</AnchorLink> </div>
      </div>
    </div>
  );
};
export default Hero;
