import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Rockets from '../components/Rockets';

const mockStore = [];
const mockMissionsReducer = () => mockStore;
const mockRocketsReducer = () => [{
  id: 0, rocket_name: 'test', description: 'test', reserve: true,
}];
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
