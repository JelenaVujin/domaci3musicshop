import React from 'react'
import OneCd from './OneCd';

function Orders({cds}) {

  return (
    <div>
      <div className="order-items">
      {cds.map((cd) => (
       
        <OneCd cd={cd} key={cd.id} inCart={0}  />
      ))}</div>
      
    </div>
  );
};

export default Orders