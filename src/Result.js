import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';
import { fetchSearchResults } from './actions/search';
import './css/standard-button.css';
import './css/result.css';

class Result extends Component {

  componentDidMount() {

    if (this.props.search.fetched === false) {
      this.props.fetchSearchResults('');
    }

  }

  render() {

    if (this.props.search.fetched) {

      const filteredResults = this.props.search.results.filter((result) => {
        return this.props.params.id === result.content.resource.id;
      });

      if (filteredResults.length === 0) {
        return (<Redirect to="/"></Redirect>);
      }

      const { resource } = filteredResults[0].content;

      return (
        <div className="result">

          <h3>{ resource.display_title }</h3>
          <p>{ resource.resource_type }</p>
          <p>{ resource.media_type }</p>
          <p>{ resource.language }</p>

          <hr />

          <p>{ resource.meaningful_description }</p>
          <p>{ resource.additional_text }</p>
          <p>{ resource.categorization }</p>

          <br />

          <Link to="/">
            <button className="standard-button standard-button--selected">Back to Search Results</button>
          </Link>

        </div>
      );

    }

    return null;

  }

};

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: () => {
      dispatch(fetchSearchResults());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
