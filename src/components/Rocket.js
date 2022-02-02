import React from 'react';
const Rocket = ({ rocket }) => (
  <div>
    <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} width="150px"/>
    <div>
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
      <button type="submit">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
