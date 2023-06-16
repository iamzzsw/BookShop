import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Header.module.css";
import Icons from "../Icons/Icons";
import { resetQuery, setQueryValue } from "../../store/books/books.reducer";

const Header = () => {
  const [searchValue, setSearcheValue] = useState("");
  const dispach = useDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearcheValue(e.target.value);
  };

  const handleSearchClick = () => {
    dispach(setQueryValue(searchValue));
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          <NavLink to="/" onClick={() => dispach(resetQuery())}>
            <Icons className={styles.iconRed} name="logo" />
          </NavLink>
        </button>
        <div className={styles.searchBlock}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className={styles.search}
            value={searchValue}
            onChange={handleValueChange}
          />
          <button className={styles.buttonSearch} onClick={handleSearchClick}>
            <Icons name="search" />
          </button>
        </div>

        <div>
          <button className={styles.button}>
            <NavLink to="/favorites/">
              <Icons name="like" />
            </NavLink>
          </button>
          <button className={styles.button}>
            <NavLink to="/cart/">
              <Icons name="basket" />
            </NavLink>
          </button>
          <button className={styles.button}>
            <NavLink to="/account/">
              <Icons name="profile" />
            </NavLink>
          </button>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Header;
