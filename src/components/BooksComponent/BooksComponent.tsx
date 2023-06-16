import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import BooksList from "../BooksList/BooksList";
import { AppDispatch } from "../../store";
import { getBooks, getNewBooks } from "../../store/books/books.action";
import { getBookSlice, getBooks as getBooksSelector } from "../../store/books/books.selectors";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { increasePage } from "../../store/books/books.reducer";
import Subscribe from "../Subscribe/Subscribe";

const Books: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, books, query, newBooks } = useSelector(getBookSlice);
  const listBook = useSelector(getBooksSelector);
  const handleClick = () => dispatch(increasePage());

  useEffect(() => {
    if (newBooks.length === 0) {
      dispatch(getNewBooks());
    }
  }, [dispatch]);

  useDidUpdate(() => {
    if (query) {
      console.log(query, page);
      dispatch(getBooks());
    }
  }, [query, page]);

  let newBooksList = query ? books : newBooks;

  if (!newBooksList.length) return null;

  return (
    <>
      <div>
        <BooksList books={listBook}></BooksList>
        {query ? <LoadMoreButton onClick={handleClick} /> : ""}
        <Subscribe></Subscribe>
      </div>
    </>
  );
};

export default Books;
