import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import {BiMinus} from 'react-icons/bi';
function OneCd({cd,onAdd,inOrder,onRemove}) {
    
  return (
    <div className='onecd'>
        <img src={cd.img} alt="slika" className='imgcard' />
     <div className="cardbody">
       <h2 className='cardauthor'>{cd.author}</h2>
       <h4 className='cardnaslov'>{cd.title}</h4>
       <h4 className='cardcena'>{cd.price}</h4>
       </div>
      {inOrder=== 1 ? (
        <>
       <button className='kupi'  onClick={() => onAdd( cd.id)}><BsPlusLg/></button>
       <button className='ponisti' onClick={()=>onRemove(cd.id)}><BiMinus/></button>
       </>
      ):(
        <h4>Količina: {cd.amount}</h4>
      )}
    
    </div>

  );
}

export default OneCd;