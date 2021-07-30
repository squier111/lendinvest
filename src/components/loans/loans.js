import React, { useContext, useEffect } from 'react';
import Context from '../../store/Context';
import { actions } from '../../store/reducers';
import data from '../../mock-data/data.json';
import { Button } from '@material-ui/core';
import './loans.scss';

const Loans = () => {
  const { store, dispatch } = useContext(Context);

  const { loans } = store;

  useEffect(() => {
    dispatch({ type: actions.GET_LOANS, payload: data });
  }, []);

  const setOpen = (id) => {
    dispatch({
      type: actions.SET_OPEN,
      payload: {
        status: true,
        id,
      },
    });
  };

  return (
    <div className="loans">
      {loans.length &&
        loans.map((item) => (
          <div className="loans-item" key={item.id}>
            {item.invested ? <span className="invested">Invested</span> : null}
            <h4 className="title">{item.title}</h4>
            {/* <span className="amount">Amount avaliable &#163;{item.amount}</span> */}
            <span className="amount">Loan details amounts and values</span>
            <Button
              color="primary"
              onClick={() => setOpen(item.id)}
              className="invest-btn"
            >
              invest
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Loans;
