import React from "react";
import banner from "../assets/stars2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit

        </p>
        </div>

        <div className="aboutContact">
        <h1> Contact Us!</h1>
        <p>
          Email = blahblah@blah.ie /
          Number = 123123123 /
          Open Hours Mon/Fri = 8am to 5pm /
          Open Hours Saturdays = 8am to 2pm /
          Closed Sundays.
        </p>
      </div>
    </div>
  );
}

export default About;
