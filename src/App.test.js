import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { StoreProvider } from './store/root.store';

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(
      <StoreProvider>
        <App />
      </StoreProvider>,
    );
    expect(wrapper).toBeDefined();
  });
});
