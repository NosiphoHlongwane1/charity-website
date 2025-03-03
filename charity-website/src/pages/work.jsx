import React, { useState } from "react";
import SAflag from '../media/SAflag.jpg';
import malawianflag from '../media/malawianflag.jpg';
import ghanianflag from '../media/ghanianflag.jpg';
import nigerianflag from '../media/nigerian.jpg';
import ethopianflag from '../media/ethopianflag.jpg';
import "./Work.css";

const countries = [
  { name: "South Africa", flag: SAflag },
  { name: "Malawi", flag: malawianflag},
  { name: "Ghana", flag: ghanianflag },
  { name: "Nigeria", flag: nigerianflag },
  { name: "Ethiopia", flag: ethopianflag},
];

function CountryCard({ country, isFlipped, onClick }) {
  return (
    <div className="col-md-4 mb-4">
      <button className="country-btn w-100 mb-2" onClick={onClick}>
        {country.name}
      </button>
      <div className={`country-card text-center p-3 ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
        <div className="card-front" style={{ backgroundImage: `url(${country.flag})` }}>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="container my-5">
      <section className="what-we-do text-center mb-5">
        <h2 className="fw-bold">Our Initiative</h2>
        <p>
          Our immediate core value is to ensure that everyone in need of food recieves their daily meal.
          We distribute food to communities in need, run educational programs, and support sustainable agriculture.
        </p>
        <p>Throughout the years we have ensure that we help communities develop skills that develop the lives of our people,
          ensuring that we do not leave the area we visit the same. <br /> We understand that for some people it is hard to bring skills to them, we therefore ensure that we bring skills closer to them. 
          <b /> Our volunteers are the key contributors to our area centers ensuring that the centers are running and equipping the members of the community centers.
        </p>
      </section>

      <section className="countries-section my-5">
        <h3 className="text-center fw-bold mb-4">Countries we've worked with</h3>
        <div className="row justify-content-center">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              isFlipped={flippedIndex === index}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
