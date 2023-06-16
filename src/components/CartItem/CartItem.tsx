import React from "react";

import styles from "./CartItem.module.css";
import Typography from "../Typography/Typography";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  decrementCount,
  incrementCount,
  resetCart,
} from "../../store/categories/categories.reducer";
import { ExtendedBookWithCount } from "../../store/categories/categories.types";

const CartItem: React.FC<ExtendedBookWithCount> = ({
  title,
  authors,
  isbn13,
  price,
  image,
  url,
  count = 1,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(resetCart(isbn13));
  };

  const oneBookPrice = `$${(count * Number(price.slice(1))).toFixed(2)}`;

  const increment = () => {
    console.log(count);
    dispatch(incrementCount(isbn13));
  };

  const decrement = () => {
    dispatch(decrementCount(isbn13));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.image}>
            <img src={image} alt={title}></img>
          </div>
          <div className={styles.text}>
            <Typography variant="h3">{title}</Typography>
            <Typography color="secondary" className={styles.about}>
              {authors}
            </Typography>
            <div className={styles.count}>
              <button className={styles.button} onClick={decrement}>
                <Typography>&minus;</Typography>
              </button>
              <Typography>{count <= 0 ? 1 : count}</Typography>
              <button className={styles.button} onClick={increment}>
                <Typography>+</Typography>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.price}>
            <Typography variant="h2">{oneBookPrice}</Typography>
          </div>
        </div>
        <button className={styles.button} onClick={handleClick}>
          <Typography className={styles.close}>&times;</Typography>
        </button>
      </div>
      <hr className={styles.line} />
    </>
  );
};

export default CartItem;
