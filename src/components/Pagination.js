import React, { useContext } from "react";
import "./styles/pagination.css";
import { PaginationContext } from "../context/paginationContext";

const Pagination = () => {
  const { state, dispatch } = useContext(PaginationContext);

  const handleActiveBtn = (e) => {
    e.target.parentNode.childNodes.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

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
          <ul className="pagination" onClick={handleActiveBtn}>
            {state.currentPage >= 5 && (
              <li id="prev" className="btn left" onClick={handlePrevBtn}>
                Prev
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
                }}
                title={`Page` + state.currentPageIndex + page}
              >
                {state.currentPageIndex + page}
              </li>
            ))}
            {state.currentPage < 500 && (
              <li id="next" className="btn right" onClick={handleNextBtn}>
                Next
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
