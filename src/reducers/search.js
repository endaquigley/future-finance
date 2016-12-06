const initalState = {
  query: '',
  fetched: false,
  fetching: false,
  results: [],
  pagination: {
    activePage: 1,
    resultsPerPage: 3
  },
  sorting: 'display_title'
};

const search = (state = initalState, action) => {

  switch (action.type) {

    case 'SORT_SEARCH_RESULTS':

      return {
        ...state,
        sorting: action.payload
      };

    case 'CHANGE_SEARCH_RESULTS_PAGE':

      return {
        ...state,
        pagination: {
          ...state.pagination,
          activePage: action.payload
        }
      };

    case 'FETCH_SEARCH_RESULTS_PENDING':

      return {
        ...state,
        results: [],
        fetched: false,
        fetching: true
      };

    case 'FETCH_SEARCH_RESULTS_FULFILLED':

      return {
        ...state,
        fetched: true,
        fetching: false,
        query: action.payload.query,
        results: action.payload.results,
        pagination: {
          ...state.pagination,
          activePage: 1
        }
      };

    default: return state;

  }

}

export default search;
