import shuffle from "lodash.shuffle";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./NewBooks.module.css";
import { Book } from "../../api/types";
import { getNewBooks } from "../../api/books/books";
import BooksList from "../BooksList/BooksList";
import Typography from "../Typography/Typography";

const NewBooks: React.FC = () => {
  const [newBooks, setNewBooks] = useState<Book[]>([]);
  const [[start, end], setSlide] = useState([0, 3]);

  const { id } = useParams();
  // const { newBooks } = useSelector(getBookSlice);

  useEffect(() => {
    getNewBooks().then((data) => {
      setNewBooks(data.books);
    });
  }, []);

  const randomBooks = useMemo(() => shuffle(newBooks).slice(0, 20), [newBooks, id]);

  const rightClick = () => {
    if (end === 20) return;
    const nextStart = start + 1;
    const nextEnd = end + 1;
    setSlide([nextStart, nextEnd]);
  };
  const leftClick = () => {
    if (start === 0) return;
    const nextStart = start - 1;
    const nextEnd = end - 1;
    setSlide([nextStart, nextEnd]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h2">new books</Typography>
        <div>
          <button className={styles.button} onClick={leftClick} disabled={start === 0}>
            <Typography>&#10229;</Typography>
          </button>
          <button className={styles.button} onClick={rightClick} disabled={end === 20}>
            <Typography>&#10230;</Typography>
          </button>
        </div>
      </div>

      <BooksList books={randomBooks.slice(start, end)}></BooksList>
    </div>
  );
};

export default NewBooks;
