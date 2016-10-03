import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'lodash/sortBy';
import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';
import SearchPagination from './SearchPagination';
import { changeSearchResultsPage } from './actions/search';
import './css/search.css';

class Search extends Component {

  render() {

    let searchResults = null;

    if (this.props.search.fetched) {
      if (this.props.search.results.length === 0) {

        searchResults = (
          <h3>No Results for "{ this.props.search.query }"</h3>
        );

      } else {

        searchResults = this.props.search.results.map((result, index) => {
          return (<SearchResult result={ result.content.resource } key={ index } />);
        });

      }
    }

    const { totalResults } = this.props.search;
    const { activePage, resultsPerPage } = this.props.search.pagination;

    return (
      <div className="search">

        <SearchPanel />

        <div className="search__pagination">
          <SearchPagination
            activePage={ activePage }
            totalResults={ totalResults }
            resultsPerPage={ resultsPerPage }
            onChange={ this.props.changeSearchResultsPage}
          />
        </div>

        <div className="search__results">
          { searchResults }
        </div>

        <div className="search__pagination">
          <SearchPagination
            activePage={ activePage }
            totalResults={ totalResults }
            resultsPerPage={ resultsPerPage }
            onChange={ this.props.changeSearchResultsPage}
          />
        </div>

      </div>
    );

  }
}

const mapStateToProps = (state) => {

  const { results, sorting } = state.search;

  let filteredResults = sortBy(results, [function(result) {
    return result.content.resource[sorting];
  }]);

  const totalResults = filteredResults.length;

  // sort out pagination for the filtered results...
  const { activePage, resultsPerPage } = state.search.pagination;
  const firstResult = (activePage - 1) * resultsPerPage;

  filteredResults = filteredResults.slice(
    firstResult,
    firstResult + resultsPerPage
  );

  return {
    search: {
      ...state.search,
      results: filteredResults,
      totalResults: totalResults
    }
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchResultsPage: function(pageNumber) {
      dispatch(changeSearchResultsPage(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
