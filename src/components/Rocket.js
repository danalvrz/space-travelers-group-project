import React from 'react';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="rocket">
    <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
    <div className="text">
      <h2>{rocket.rocket_name}</h2>
      <p>
          <span className="reservation"> Reserved </span>
          {rocket.description}
      </p>
      <button type="submit" className="rounded-full bg-sky-400" active>Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
