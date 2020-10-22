import React, { useEffect } from "react";
import "../styles/About.css";
import shoot from "../images/swts5.jpg";
import ContactForm from "./ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about">
      <div data-aos="fade-up" className="about__bg" style={{ backgroundImage: `url(${shoot})` }}>
      </div>
      <div data-aos="fade-up" className="about__lower">
        <h3>How We Got Here</h3>
        <p>
          Since 2001, the Sheriff’s Police Athletic League has given hope and
          opportunity to children in low-income areas of mid-Pinellas County.
          The program serves as a foundation for the development of leadership
          skills, good citizenship and sportsmanship that many of these children
          would not have otherwise. With your support, we look forward to
          accomplishing our primary goal, which is to positively impact the
          lives of these children.Shoot with the Stars is an annual event held
          at Tampa Bay Sporting Clays’ state-of-the-art facility in Land O’
          Lakes. Participants will enjoy breakfast followed by an all-inclusive
          morning of competitive clay shooting that will conclude with a catered
          lunch. All sponsorship and registration funds support the Sheriff’s
          Police Athletic League.We invite you to join us on Saturday, February
          20, 2021, to see if you have what it takes to shoot with the stars.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default About;
