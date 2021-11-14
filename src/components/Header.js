import React from "react";

const Header = ({ onSubmit }) => {
  return (
    <header>
      <h3>Simple Movie App</h3>
      <form id="form" onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search"
        />
      </form>
    </header>
  );
};

export default Header;
