import { useState } from "react";
import styles from "./SearchInput.module.css";
import PropTypes from "prop-types";

export function SearchInput({ handleSearch }) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder={isActive ? "" : "Search for a movie..."}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={(event) => {
            if (event.code === "Enter") {
              handleSearch(event.target.value);
            }
          }}
        />
          <button
            className={styles.button}
            onClick={() => {    

              const inputValue = document.querySelector(`.${styles.input}`).value;
              handleSearch(inputValue);

            }} >Search
          </button>
      </div> 
    </>
  );
}

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};