import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';
import data from '../../mock-data/data.json';
import Context from '../../store/Context';
import { TextField } from '@material-ui/core';

const dispatch = jest.fn();
const store = {
  loans: data.loans,
  open: true,
  loansItem: data.loans[0],
};

describe('Modal', () => {
  const wrapper = mount(
    <Context.Provider value={{ store, dispatch }}>
      <Modal />
    </Context.Provider>,
  );

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render Loans Close Modal', () => {
    wrapper.find('.modal').simulate('click');

    expect(wrapper).toEqual({});
  });

  it('Render  Modal on Button Click', () => {
    wrapper.find('.button-close').first().simulate('click');

    expect(wrapper).toEqual({});
  });

  it('Render if open false', () => {
    const store = {
      loans: data.loans,
      open: false,
      loansItem: data.loans[0],
    };

    const wrapper = mount(
      <Context.Provider value={{ store, dispatch }}>
        <Modal />
      </Context.Provider>,
    );

    expect(wrapper).toEqual({});
  });

  it('Modal input on Change field', () => {
    wrapper.find('input').simulate('change');

    expect(wrapper.find('input').prop('changeValue')).toBeUndefined();
  });

  it('Modal input on KeyDown', () => {
    wrapper.find('input').simulate('keyDown');

    expect(wrapper.find('input').prop('onKeyDown')).toBeUndefined();
  });
});
