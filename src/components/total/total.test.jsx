import React from 'react';
import { mount } from 'enzyme';
import TotalAmount from './total-amount';
import { StoreProvider } from '../../store/root.store';

describe('Modal', () => {
  it('renders', () => {
    const wrapper = mount(
      <StoreProvider>
        <TotalAmount />
      </StoreProvider>,
    );
    expect(wrapper).toBeDefined();
  });
});
