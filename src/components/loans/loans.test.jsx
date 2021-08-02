import React from 'react';
import { mount } from 'enzyme';
import Loans from './loans';
import data from '../../mock-data/data.json';
import Context from '../../store/Context';
import { Button } from '@material-ui/core';
import Modal from '../modal';

const dispatch = jest.fn();
const store = {
  loans: data.loans,
  open: false,
  loansItem: {},
};

describe('Loans', () => {
  const wrapper = mount(
    <Context.Provider value={{ store, dispatch }}>
      <Loans />
    </Context.Provider>,
  );

  const modal = mount(
    <Context.Provider value={{ store, dispatch }}>
      <Modal />
    </Context.Provider>,
  );
  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render Loans Open Modal', () => {
    wrapper.find(Button).first().simulate('click');

    expect(modal).toBeDefined();
  });

  it('Render Loans Open Modal Button', () => {
    wrapper.find(Button).first().simulate('click');

    expect(modal).toBeDefined();
  });

  it('renders invested label', () => {
    const investedLoans = data.loans.map((item) => {
      return {
        ...item,
        invested: true,
      };
    });

    const store = {
      loans: investedLoans,
      open: false,
      loansItem: {},
    };

    const wrapper = mount(
      <Context.Provider value={{ store, dispatch }}>
        <Loans />
      </Context.Provider>,
    );

    expect(wrapper.find('.invested')).toBeDefined();
  });
});



