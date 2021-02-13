import React from 'react';
import './pagination.css';

export const Pagination = ({ newsPerPage, totalPage, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <div className="pagination-wrap">
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <a 
              onClick={() => paginate(number)} 
              href={`#/page${number}`}
              className="item-link"
              key={number}
            >
              <li className="page-item">
                {number}
              </li>
            </a>
          ))
        }
      </ul>
    </div>
  );
}