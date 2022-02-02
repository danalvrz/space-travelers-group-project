import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Header from '../components/Header';

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

describe('Header section', () => {
  it('renders Header correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
