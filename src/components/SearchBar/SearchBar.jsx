import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={s.wrapper}>
        <input
          placeholder="Search images..."
          type="text"
          value={query}
          onChange={handleInputChange}
          className={s.searchForm}
        />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
};
