import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import { getBookSlice } from "../../store/books/books.selectors";
import { getBook } from "../../store/books/books.action";
import { reserBook } from "../../store/books/books.reducer";

import styles from "./SelectedBook.module.css";
import BookCard from "../Book/Book";

const SelectedBook: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { books, book } = useSelector(getBookSlice);

  useEffect(() => {
    if (!id) return () => {};

    dispatch(getBook(id));

    return () => dispatch(reserBook());
  }, [dispatch, id]);

  return <div className={styles.wrapper}>{book && <BookCard book={book} />}</div>;
};

export default SelectedBook;
