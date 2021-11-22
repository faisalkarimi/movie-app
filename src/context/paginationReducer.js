const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "INCREMENT_BY_FIVE":
      return {
        ...state,
        currentPage: state.currentPage + 5,
        currentPageIndex: state.currentPage + 5,
      };
    case "DECREMENT_BY_FIVE":
      return {
        ...state,
        currentPage: state.currentPage - 5,
        currentPageIndex: state.currentPage - 5,
      };
    default:
      return state;
  }
};

export default paginationReducer;
