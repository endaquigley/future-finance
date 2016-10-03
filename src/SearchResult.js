import React from 'react';
import { Link } from 'react-router';
import './css/search-result.css';

const SearchResult = ({ result }) => {

  return (
    <div className="search-result">
      <h3>{ result.display_title }</h3>
      <p>{ result.resource_type }</p>
      <p>{ result.media_type }</p>
      <p>{ result.language }</p>
      <p>
        <Link to={'/result/' + result.id }>
          <button className="standard-button standard-button--selected">View More</button>
        </Link>
      </p>
    </div>
  );

}

export default SearchResult;
