import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortButton from './SortButton';
import { fetchSearchResults, sortSearchResults } from './actions/search';
import './css/search-panel.css';

class SearchPanel extends Component {

  state = {
    query: this.props.search.query
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  fetchSearchResults() {
    const { query } = this.state;
    this.props.fetchSearchResults(query);
  }

  render() {

    return (
      <div className="search-panel">

        <input type="text" className="search-panel__field" placeholder="Resource Search..." defaultValue={ this.state.query } onChange={ this.handleChange.bind(this) } />
        <button className="search-panel__button" onClick={ this.fetchSearchResults.bind(this) } disabled={ this.props.search.fetching }>Search</button>

        <div className="search-panel__sort">

          <SortButton
            title="Display Title"
            sorting="display_title"
            currentSorting={ this.props.search.sorting }
            onClick={ this.props.sortSearchResults }
          />

          <SortButton
            title="Resource Type"
            sorting="resource_type"
            currentSorting={ this.props.search.sorting }
            onClick={ this.props.sortSearchResults }
          />

          <SortButton
            title="Media Type"
            sorting="media_type"
            currentSorting={ this.props.search.sorting }
            onClick={ this.props.sortSearchResults }
          />

          <SortButton
            title="Langauge"
            sorting="language"
            currentSorting={ this.props.search.sorting }
            onClick={ this.props.sortSearchResults }
          />

        </div>

      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: (query) => {
      dispatch(fetchSearchResults(query));
    },
    sortSearchResults: (field) => {
      dispatch(sortSearchResults(field));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
