import React, { useRef } from "react";
import newHomeAbout from '../assests/images/newHomeAbout.png'
import bigGoogleIcon from '../assests/images/bigGoogleicon.png'
import { FiArrowDown } from 'react-icons/fi';



const About = () => {

  return (
    <div className="about-section-container" >
      <div className="about-background-image-container">
        <img src={newHomeAbout} alt="newHomeAbout" />
      </div>
      <div className="about-section-image-container">
        <img src={bigGoogleIcon} alt="bigGoogleIcon" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Imagine All The Vacant Lodges Around Unec
        </h1>
        <p className="primary-text">
          All collected and grouped into Collections depending on their Locations, Type and Vacancy Options(either Male or Female Roommate)
          <br /> This is what we are set to achieve with CampusProps.
        </p>
        <p className="primary-text">
          Agents in UNEC would post their lodges in the platform and  Prospective Tenants would easily have access to all the lodges posted and contact the Agent real fast!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
          Join Waitlist Below <FiArrowDown/> </button>
        </div>
      </div>
    </div>
  );
};

export default About;