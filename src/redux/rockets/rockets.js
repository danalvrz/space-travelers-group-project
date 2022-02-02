import fetchRockets from './rocketsApi';

const FETCH_ROCKETS = './rockets/FETCH_ROCKETS';

const initialState = [];

const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const rockets = await fetchRockets().then((data) => dispatch(getRockets(data)));
  return rockets;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
