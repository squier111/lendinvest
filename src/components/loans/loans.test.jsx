import React from 'react';
import { mount } from 'enzyme';
import Loans from './loans';

describe('Loans', () => {
  it('renders', () => {
    const wrapper = mount(<Loans />);
    expect(wrapper).toBeDefined();
  });
});
