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

      state = {
        ...state,
        sorting: action.payload
      };

      return state;

    case 'CHANGE_SEARCH_RESULTS_PAGE':

      state = {
        ...state,
        pagination: {
          ...state.pagination,
          activePage: action.payload
        }
      };

      return state;

    case 'FETCH_SEARCH_RESULTS_PENDING':

      state = {
        ...state,
        results: [],
        fetched: false,
        fetching: true
      };

      return state;

    case 'FETCH_SEARCH_RESULTS_FULFILLED':

      state = {
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

      return state;

    default: return state;

  }

}

export default search;
