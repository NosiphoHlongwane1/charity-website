import React from "react";
import Founderimg1 from '../media/founderimg1.jpg';
import founderimg2 from '../media/founderimg2.jpg';
import founderimg3 from '../media/founderimg3.jpg';
import unileverimg from '../media/unileverimg.jpg';
import cloverimg from '../media/cloverimg.png';
import emiratesimg from '../media/emiratesimg.png';
import usaidimg from '../media/usaidimg.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; 

function About() {
  return (
    <div>
  
      <div className="about-section bg-green text-white py-5">
  <div className="container">
    <h2 className="text-center">About Us</h2>
    <div className="row">
      <div className="col-12 mb-4">
        <h4>Who We Are</h4>
        <p>Izandla Ziyagezana is a dedicated non-governmental organization committed to eradicating poverty across African nations.
          We believe in the power of community and collective action, working alongside local governments, businesses, and communities to bring sustainable change.</p>
          <p>Our name, Izandla Ziyagezana, translates to "hands are helping each other" in Zulu, reflecting the core value of collaboration and mutual support that drives our mission. 
          We stand together with individuals and communities to uplift, empower, and create lasting impact, ensuring no one is left behind in the fight against poverty.</p>
          
          <p>Our organization is composed of passionate individuals from diverse backgrounds who share a common vision: a world where all people, regardless of their circumstances, have access to basic needs such as food, shelter, healthcare, and education. 
          We pride ourselves on our transparency, integrity, and commitment to making a real difference. 
          Through our programs and initiatives, we aim to tackle the root causes of poverty and build resilient communities that thrive independently.</p>
      </div>
      <div className="col-12 mb-4">
        <h4>What We Do</h4>
        <p>Izandla Ziyagezana focuses on addressing the root causes of poverty through a variety of initiatives.
        These include access to clean water, healthcare, education, and vocational training programs that equip individuals with the skills they need to thrive.</p>
      </div>
      <div className="col-12 mb-4">
        <h4>When We Started</h4>
        <p>Founded in 2015, Izandla Ziyagezana began with a small group of passionate individuals determined to make a difference.
        Since then, we have expanded our reach and grown into a movement with a far-reaching impact, helping thousands of individuals across the continent.</p>
      </div>
    </div>
  </div>
</div>

      <div className="founders-section bg-white py-5">
        <div className="container">
          <h2 className="text-center">Meet Our Founders</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img src={Founderimg1} className="rounded-circle" alt="Founder" />
              <p>Jade Msibi - CEO</p>
            </div>
            <div className="col-md-4">
              <img src={founderimg2} className="rounded-circle" alt="Founder" />
              <p>Olivia Nwumba - Co-Founder</p>
            </div>
            <div className="col-md-4">
              <img src={founderimg3}className="rounded-circle" alt="Founder" />
              <p>Kwanda Loh - Co-Founder</p>
            </div>
            <div>
              <p>We have volunteers that are helpful in all our comminity offices</p>
              <p>We are always open to new people that want to volunteer with us, visit our community offices closer to your area.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sponsors-section bg-green text-white py-5">
        <div className="container">
          <h3 className="text-center">Our Sponsors</h3>
          <div className="text-center">
            <div className="brand-logos">
              <img src={unileverimg} alt="Unilever" className="brand-logo" />
              <img src={cloverimg} alt="Clover" className="brand-logo" />
              <img src={emiratesimg} alt="Emirates" className="brand-logo" />
              <img src={usaidimg}alt="USAid" className="brand-logo" />
              </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default About;
