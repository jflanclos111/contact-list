import React from "react";
import "./search-bar.styles.scss";

export function SearchBar({ searchText, handleSearch }) {
  return (
    <div className="search-container">
      <form className="search-bar">
        <input
          className="search"
          spellCheck="false"
          name="searchInput"
          onChange={handleSearch}
          value={searchText}
          placeholder={"Search Contacts"}
        ></input>
      </form>
    </div>
  );
}
