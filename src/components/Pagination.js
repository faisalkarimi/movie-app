import React, { useContext, useState } from "react";
import "./styles/pagination.css";
import { PaginationContext } from "../context/paginationContext";

const Pagination = () => {
  const { state, dispatch } = useContext(PaginationContext);
  const [isActive, setIsActive] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const pageButtons = [1, 2, 3, 4, 5];
  const handlePrevBtn = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage - 5 });
    console.log(state.currentPage);
  };
  const handleNextBtn = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage + 5 });
    console.log(state.currentPage);
  };

  const handleActive = (e) => {
    setTargetId(e.target.id);
    console.log(e.target.id);
    setIsActive(!isActive);
  };

  return (
    <div id="pagination">
      <nav>
        <div style={{ textAlign: "center", clear: "both" }}>
          <ul className="pagination" onClick={handleActive}>
            {state.currentPage > 5 && (
              <li
                id="prev"
                className={targetId === "prev" && isActive && "active"}
              >
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
                    payload: state.currentPage + page,
                  });
                  console.log(state.currentPage);
                }}
                title={`Page` + page}
                className={targetId === page && isActive && "active"}
              >
                {page}
              </li>
            ))}
            {state.currentPage < 500 && (
              <li
                id="next"
                className={targetId === "next" && isActive && "active"}
              >
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
