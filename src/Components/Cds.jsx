import React from 'react';
import OneCd from './OneCd';
import {useState} from 'react';
function Cds({cds,onAdd,onRemove}) {
  const [sort, setSort] =useState(true);
function sortAsc(){
  setSort(true);
}
function sortDesc(){
  setSort(false);
}
return (
  <div>
     <div className="buttons">
    <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
    <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button></div>
  <div className='order-items'>
 

{sort === true ? (
      <>
        {cds
          .sort((a, b) =>
            a.price < b.price ? -1 : 1)
          .map((cd) => (
            <OneCd cd={cd} key={cd.id} onAdd={onAdd}  onRemove={onRemove} inOrder={1}
            />
          ))}
      </>
    ) : (
      <>
        {cds
          .sort((a, b) =>a.price < b.price ? 1 : -1)
          .map((cd) => (
            <OneCd cd={cd} key={cd.id} onRemove={onRemove} onAdd={onAdd} inOrder={1}
            />
          ))}
      </>
    )}
  
  
</div></div>
);
};

export default Cds
   

