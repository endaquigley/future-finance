import axios from 'axios';

const fetchSearchResultsPending = () => {
  return {
    type: 'FETCH_SEARCH_RESULTS_PENDING'
  }
};

const fetchSearchResultsFulfilled = (query, results) => {
  return {
    type: 'FETCH_SEARCH_RESULTS_FULFILLED',
    payload: { query, results }
  }
};

export const sortSearchResults = (field) => {
  return {
    type: 'SORT_SEARCH_RESULTS',
    payload: field
  }
};

export const changeSearchResultsPage = (pageNumber) => {
  return {
    type: 'CHANGE_SEARCH_RESULTS_PAGE',
    payload: pageNumber
  }
}

export const fetchSearchResults = (query = '') => {
  return (dispatch) => {

    dispatch(fetchSearchResultsPending());

    axios.get('content.json').then(({ data }) => {

      const results = data.response.results.result;

      const filteredResults = results.filter((result) => {
        const title = result.content.resource.display_title;
        return title.toLowerCase().includes(query.toLowerCase());
      });

      dispatch(fetchSearchResultsFulfilled(query, filteredResults));

    });

  };
};
