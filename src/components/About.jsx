import React from "react";

export const About = () => {
  return (
    <div>
      <section id="About">
        <h1 className="title"> About </h1>
        <p className="description">
          <strong> Localisation: 1234 Melody Lane Anytown, USA 56789 </strong>
        </p>
        <br />
        <p className="description">
          <strong> Subway:</strong> Subway Nearest <strong>Subway Station: Harmony Station.</strong> From Harmony Station, walk south for 2 blocks on Main Street. Turn left onto Melody Lane. Altanos Concert Hall will be on your right.
        </p>
        <br />
        <p className="description">
          <strong>Driving :</strong> From downtown Anytown, <strong>take Main Street heading south.</strong> Continue on Main Street for about 3 miles. Turn left onto Melody Lane.
        </p>
        <br />
        <p className="description">Altano is accessible to people with reduced mobility. All premises are non-smoking. In order to protect your hearing, earplugs are provided for your use.</p>
      </section>
    </div>
  );
};

export default About;
