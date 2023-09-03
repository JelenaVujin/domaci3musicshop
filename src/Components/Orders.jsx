import React from 'react'
import OneCd from './OneCd';

function Orders({cds,cdPrice}) {
  return (
    <div>
      <div className="order-items">
      {cds.map((cd) => (
        <OneCd cd={cd} key={cd.id} inCart={0} />
      ))}</div>
      <h1>Ukupna cena: </h1>
    </div>
  );
};

export default Orders