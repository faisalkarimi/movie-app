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
        currentPage: state.currentPageIndex + 5,
        currentPageIndex: state.currentPage,
      };
    case "DECREMENT_BY_FIVE":
      return {
        ...state,
        currentPage: state.currentPageIndex - 5,
        currentPageIndex: state.currentPage,
      };
    default:
      return state;
  }
};

export default paginationReducer;
