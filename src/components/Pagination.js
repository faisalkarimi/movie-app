import React, { useContext } from "react";
import "./styles/pagination.css";
import { PaginationContext } from "../context/paginationContext";

const Pagination = () => {
  const { state, dispatch } = useContext(PaginationContext);

  const pageButtons = [1, 2, 3, 4, 5];
  const handlePrevBtn = () => {
    dispatch({ type: "DECREMENT_BY_FIVE" });
  };
  const handleNextBtn = () => {
    dispatch({ type: "INCREMENT_BY_FIVE" });
  };

  return (
    <div id="pagination">
      <nav>
        <div style={{ textAlign: "center", clear: "both" }}>
          <ul className="pagination">
            {state.currentPage > 5 && (
              <li id="prev">
                <button className="btn left" onClick={handlePrevBtn}>
                  Prev
                </button>
              </li>
            )}
            {pageButtons.map((page) => (
              <li
                key={page}
                onClick={() => {
                  dispatch({
                    type: "SET_CURRENT_PAGE",
                    payload: state.currentPageIndex + page,
                  });
                  console.log(state.currentPage);
                }}
                title={`Page` + page}
              >
                {state.currentPageIndex + page}
              </li>
            ))}
            {state.currentPage < 500 && (
              <li id="next">
                <button className="btn right" onClick={handleNextBtn}>
                  Next
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
