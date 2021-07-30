import React, { useContext, useMemo, useState } from 'react';
import Context from '../../store/Context';
import numberWithCommas from '../../utils/numberWithCommas';

const TotalAmount = () => {
  const { store } = useContext(Context);
  const { loans } = store;
  const [total, setTotoal] = useState(0);

  useMemo(() => {
    const totalCalc = loans.reduce(
      (acc, item) => acc + parseFloat(item.amount.replace(',', '')),
      0,
    );
    setTotoal(totalCalc);
  }, [loans]);

  return (
    <div className="total-amount">
      <span>
        Total amount avaliable for investments
        <b>&#163;{numberWithCommas(total)}</b>
      </span>
    </div>
  );
};

export default TotalAmount;
