import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Context from '../../store/Context';
import { actions } from '../../store/reducers';
import numberWithCommas from '../../utils/numberWithCommas';
import { TextField, Button } from '@material-ui/core';
import './modal.scss';
import { useEffect } from 'react';

const Modal = () => {
  const { store, dispatch } = useContext(Context);
  const { open, loansItem } = store;

  const [item, setItem] = useState('');
  const [loansItemAmount, setLoansItemAmount] = useState('');

  useEffect(() => {
    setLoansItemAmount(loansItem?.amount);
  }, [loansItem?.amount]);

  const setOpen = () => {
    dispatch({
      type: actions.SET_OPEN,
      payload: {
        status: false,
        id: null,
      },
    });
    setItem('');
  };

  const investHandler = () => {
    dispatch({
      type: actions.DECREASE,
      payload: {
        amount: item,
        id: loansItem.id,
        status: false,
      },
    });
    setItem('');
  };

  const onChangeHandler = (e) => {
    const modifyNumber = Number.isInteger(loansItemAmount)
      ? loansItemAmount
      : parseFloat(loansItemAmount.replace(',', ''));
    if (
      Number(e.target.value) > parseFloat(loansItem?.amount.replace(',', ''))
    ) {
      setItem('');
      return;
    } else {
      setItem(e.target.value);
    }
    setLoansItemAmount(() => modifyNumber - Number(e.target.value));
  };

  if (!open) {
    return null;
  }

  const getModal = () => {
    return (
      <div className={`modal ${open ? 'show' : ''}`} onClick={() => setOpen()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="title">Invest in Loan</h3>
            <span>{loansItem.title}</span>
          </div>
          <div className="modal-body">
            <span>
              Amount avaliable &#163;{numberWithCommas(loansItem.amount)}
            </span>
            <div className="input-holder">
              <div>
                <h4>Investment amount (&#163;)</h4>
                <TextField
                  value={item}
                  onChange={(event) => onChangeHandler(event)}
                  label="investment"
                  id="Duration"
                  type="number"
                  onKeyDown={(evt) =>
                    ['e', 'E', '+', '-'].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  InputProps={{
                    inputProps: {
                      max: parseFloat(loansItem.amount.replace(',', '')),
                      min: 0,
                    },
                  }}
                />
              </div>
              <Button
                variant="contained"
                className="button-close"
                onClick={() => investHandler()}
              >
                invest
              </Button>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              variant="contained"
              className="button-close"
              onClick={() => setOpen()}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(getModal(), document.getElementById('root'));
};

export default Modal;
