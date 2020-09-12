import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigationbar from './Navigationbar';
import SignedInUser from './SignedInUser';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import SignedOutUser from './SignedOutUser';

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('<Navigationbar />', () => {
  it('should render SignedInUser component if the user is authenticated', () => {
    const store = mockStore({ auth: { isAuthenticated: true } });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navigationbar />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(SignedInUser)).toHaveLength(1);
  });

  it('should render SignedOutUser component if the user is not authenticated', () => {
    const store = mockStore({ auth: { isAuthenticated: false } });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navigationbar />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(SignedOutUser)).toHaveLength(1);
  });
});
