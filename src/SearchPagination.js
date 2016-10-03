import React from 'react';
import Pagination from 'react-js-pagination';
import './css/pagination.css';

const SearchPagination = ({ activePage, totalResults, resultsPerPage, onChange }) => {

  return (
    <Pagination
      activePage={ activePage }
      totalItemsCount={ totalResults }
      itemsCountPerPage={ resultsPerPage }
      onChange={ onChange.bind(this) }
    />
  );

};

export default SearchPagination;
