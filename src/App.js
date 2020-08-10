import React, { useState, useEffect } from "react";
import "./App.scss";
import { CONTACTS } from "./data/contacts";
import { SearchBar } from "./components/search-bar/search-bar.component";
import { IdCardContainer } from "./components/id-card-container/id-card-container";

export function App() {
  const [search, setSearch] = useState({ searchField: "" });
  const [contacts, setContacts] = useState(CONTACTS);

  function handleSearch(event) {
    const { value } = event.target;
    setSearch((prevSearch) => {
      return { ...prevSearch, searchField: value };
    });
  }

  function filterSearch(rawArray, searchText) {
    const filteredContacts = rawArray.filter((contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const sortedContacts = filteredContacts.sort((a, b) => {
      if (a.name >= b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return sortedContacts;
  }

  useEffect(() => {
    const newContacts = filterSearch(CONTACTS, search.searchField);
    setContacts(() => {
      return newContacts;
    });
  }, [search]);

  return (
    <div className="page">
      <div className="search">
        <SearchBar searchText={search.searchField} handleSearch={handleSearch} />
      </div>
      <div className="contacts">
        <IdCardContainer contactList={contacts} />
      </div>
    </div>
  );
}
