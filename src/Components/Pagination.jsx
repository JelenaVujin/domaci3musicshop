import React from 'react';
function Pagination({ cdPerPage, totalProducts, paginate }){
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / cdPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' style={{"color":"#3D1766"}} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;