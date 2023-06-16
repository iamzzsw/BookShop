import React from "react";
import { Book } from "../../api/types";

import styles from "./FavoriteItem.module.css";
import Icons from "../Icons/Icons";
import Typography from "../Typography/Typography";
import { NavLink } from "react-router-dom";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { resetFavorite } from "../../store/categories/categories.reducer";

interface FavoriteItemProps {
  error?: string;
  title: string;
  subtitle?: string;
  authors: string;
  publisher?: string;
  isbn10?: string;
  isbn13: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price: string;
  image: string;
  url: string;
  pdf?: {
    "Chapter 2": string;
    "Chapter 5": string;
  };
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  title,
  authors,
  isbn13,
  price,
  image,
  url,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(resetFavorite(isbn13));
  };
  return (
    <div className={styles.container}>
      <NavLink to={url} className={styles.link}>
        <div className={styles.info}>
          <div className={styles.image}>
            <img src={image} alt={title}></img>
          </div>
          <div className={styles.text}>
            <Typography variant="h3">{title}</Typography>
            <Typography color="secondary" className={styles.about}>
              {authors}
            </Typography>
            <Typography variant="h3">{price}</Typography>
          </div>
        </div>
      </NavLink>
      <button className={styles.button} onClick={handleClick}>
        <Icons name="redLike"></Icons>
      </button>
    </div>
  );
};

export default FavoriteItem;
