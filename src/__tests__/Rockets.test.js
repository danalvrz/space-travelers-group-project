import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Rockets from '../components/Rockets';

const mockStore = [];
const mockMissionsReducer = () => [{
  mission_id: 0, mission_name: 'test', mission_description: 'test', member: true,
}];
const mockRocketsReducer = () => mockStore;
const mockReducer = () => combineReducers({
  mockMissionsReducer,
  mockRocketsReducer,
});
const store = createStore(mockReducer);

describe('Rockets section', () => {
  it('renders Rockets correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
