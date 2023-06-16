import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { AppDispatch } from "../../store";
import Typography from "../Typography/Typography";
import { getCategoriesSlice, getTotalPrice } from "../../store/categories/categories.selectors";
import { addAllBookToCart } from "../../store/categories/categories.reducer";
import CartList from "../CartList/CartList";
import Check from "../Check/Check";
import styles from "./CartComponent.module.css";

export const getCart = () => {
  return window.localStorage.getItem("cart");
};

const CartComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector(getCategoriesSlice);
  const totalPrice = useSelector(getTotalPrice);

  useEffect(() => {
    let cart = getCart();
    if (cart) {
      dispatch(addAllBookToCart(JSON.parse(cart)));
      console.log(cart);
    }
  }, []);
  return (
    <>
      <NavLink to="/" className={styles.link}>
        <Typography className={styles.back} variant="h3">
          &#10229;
        </Typography>
      </NavLink>
      <Typography variant="h1">your cart</Typography>
      <CartList books={cart}></CartList>
      <Check sum={totalPrice}></Check>
    </>
  );
};

export default CartComponent;
