import numberWithCommas from '../utils/numberWithCommas';

export const initialState = {
  loans: [],
  open: false,
  loansItem: {},
};

export const actions = Object.freeze({
  GET_LOANS: 'GET_LOANS',
  SET_OPEN: 'SET_OPEN',
  DECREASE: 'DECREASE',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_LOANS:
      return {
        ...state,
        loans: action.payload.loans,
      };
    case actions.SET_OPEN:
      return {
        ...state,
        open: action.payload.status,
        loansItem: action.payload.id
          ? state.loans.find((item) => item.id === action.payload.id)
          : null,
      };

    case actions.DECREASE:
      return {
        ...state,
        open: action.payload.status,
        loans: state.loans.map((item) => {
          if (item.id === action.payload.id) {
            const newAmount =
              parseFloat(item.amount.replace(',', '')) -
              Number(action.payload.amount);
            return {
              ...item,
              amount: numberWithCommas(newAmount),
              invested: true,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
