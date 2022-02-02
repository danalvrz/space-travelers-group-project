import fetchRockets from './rocketsApi';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';

const initialState = [];

export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKETS,
  id: rocket.id,
});

const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  await fetchRockets().then((data) => dispatch(getRockets(data)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserve: !rocket.reserve,
        };
      });
    default:
      return state;
  }
};

export default reducer;
