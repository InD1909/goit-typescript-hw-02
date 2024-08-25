import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
        {" "}
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
export default SearchBar;
