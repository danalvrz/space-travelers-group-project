const rocketsUrl = new URL('https://api.spacexdata.com/v3/rockets?filter=id,rocket_name,description,flickr_images');

const fetchRockets = async () => {
  const rocketsData = await fetch(rocketsUrl).then((response) => response.json());
  return rocketsData;
};

export default fetchRockets;
