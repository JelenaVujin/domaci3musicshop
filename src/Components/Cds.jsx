import React from 'react';
import OneCd from './OneCd';

function Cds({cds,onAdd,onRemove}) {
  return (
    <div className='order-items'>
      {cds.map((cd) => (
        <OneCd cd={cd} key={cd.id} onAdd={onAdd} onRemove={onRemove} inOrder={1} />
      ))}
     
    </div>
  )
}

export default Cds
