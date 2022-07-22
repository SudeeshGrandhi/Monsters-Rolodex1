//import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};
export default SearchBox;
