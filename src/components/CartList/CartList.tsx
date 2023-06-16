import React from "react";

import styles from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";
import { ExtendedBookWithCount } from "../../store/categories/categories.types";

interface CartListBook {
  books: ExtendedBookWithCount[];
}

const CartList: React.FC<CartListBook> = ({ books }) => {
  return (
    <>
      <ul className={styles.list}>
        {books.map((book) => (
          <li className={styles.listItem} key={book.isbn13}>
            <CartItem
              isbn13={book.isbn13}
              title={book.title}
              authors={book.authors}
              price={book.price}
              image={book.image}
              url={`/books/${book.isbn13}`}
              count={book.count}
            />
          </li>
        ))}{" "}
      </ul>
    </>
  );
};

export default CartList;
