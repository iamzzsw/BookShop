import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getCategoriesSlice, getUser } from "../../store/categories/categories.selectors";
import FavoriteList from "../FavoriteList/FavoriteList";
import { AppDispatch } from "../../store";
import { addAllBook } from "../../store/categories/categories.reducer";
import Typography from "../Typography/Typography";
import styles from "./FavoriteComponent.module.css";

export const getFavorites = () => {
  return window.localStorage.getItem("favorites");
};

export const setFavorites = (favorites: string) => {
  window.localStorage.setItem("favorites", favorites);
};

const FavoriteComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favorite } = useSelector(getCategoriesSlice);
  const user = useSelector(getUser);

  useEffect(() => {
    let favorites = getFavorites();
    if (favorites) {
      dispatch(addAllBook(JSON.parse(favorites)));
      console.log(favorites);
    }
  }, []);

  return (
    <>
      <NavLink to="/" className={styles.link}>
        <Typography className={styles.back} variant="h3">
          &#10229;
        </Typography>
      </NavLink>
      <FavoriteList books={favorite}></FavoriteList>
      {user ? (
        <NavLink to="/signIn" className={styles.link}>
          {" "}
          <Typography variant="h2" className={styles.text}>
            You need to log in
          </Typography>
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
};

export default FavoriteComponent;
