/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const SearchBox = ({ searchText }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    searchText(search);
  }, [search, searchText]);

  return (
    <div className="text-center py-3">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input border-blue-950 w-full max-w-xs"
      />
    </div>
  );
};

export default SearchBox;
