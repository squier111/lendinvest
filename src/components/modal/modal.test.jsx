import React from 'react';
import { mount } from 'enzyme';
import Modal from './modal';

describe('Modal', () => {
  it('renders', () => {
    const wrapper = mount(<Modal />);
    expect(wrapper).toBeDefined();
  });
});
