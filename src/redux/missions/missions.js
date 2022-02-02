const missionsInitialState = [];

const missions = (state = missionsInitialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return [...state, ...action.payload];
    case 'JOIN_MISSION':
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) {
          return mission;
        }
        return {
          ...mission,
          member: !mission.member,
        };
      });
    default:
      return state;
  }
};

export default missions;
