const rocketsUrl = new URL('https://api.spacexdata.com/v3/rockets?limit=10');

const fetchRockets = async () => {
  const rocketsData = await fetch(rocketsUrl).then((response) => response.json());
  return rocketsData;
};

export default fetchRockets;
