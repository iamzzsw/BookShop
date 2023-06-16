import React, { useEffect, useMemo, useState } from "react";
import { Book, ExtendedBook } from "../../api/types";
import Title from "../Title/Title";
import styles from "./Book.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Tabs, { Tab } from "../Tabs/Tabs";
import { NavLink } from "react-router-dom";
import Icons from "../Icons/Icons";
import Subscribe from "../Subscribe/Subscribe";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "../../store/categories/categories.reducer";
import { isBookFavorite, isBookInCart } from "../../store/categories/categories.selectors";
import FavotiteIcon from "../Icons/svg/Vector.svg";
import NewBooks from "../NewBooks/NewBooks";
import EmptyStar from "./stars/free-icon-favorite-7612357.png";
import Star from "./stars/free-icon-favorite-7612719.png";

const tabs: Tab[] = [
  {
    label: "Description",
    value: "description",
  },
  {
    label: "Authors",
    value: "authors",
  },
  {
    label: "Reviews",
    value: "reviews",
  },
];

interface BookCardProps {
  book: ExtendedBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);
  const dispatch = useDispatch<AppDispatch>();
  const isFav = useSelector(isBookFavorite);
  const isCart = useSelector(isBookInCart);

  const handleClick = () => {
    dispatch(addToFavorite(book));
  };

  const handleClickCard = () => {
    dispatch(addToCart(book));
  };

  const handleTabClick = (tab: Tab) => setActiveTab(tab.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavLink to="/" className={styles.link}>
        <Typography className={styles.back} variant="h3">
          &#10229;
        </Typography>
      </NavLink>
      <Typography variant="h1">{book.title}</Typography>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={book.image} alt={book.title} />
          {!isFav && (
            <div className={styles.favorite}>
              <button className={styles.likeButton} onClick={handleClick}>
                <Icons name="redLike"></Icons>
              </button>
            </div>
          )}
        </div>
        <div className={styles.text}>
          <div className={styles.stateLine}>
            <Typography variant="h2">{book.price}</Typography>
            <div className={styles.rating}>
              {book.rating && +book.rating > 1 ? (
                <img src={Star}></img>
              ) : (
                <img src={EmptyStar}></img>
              )}
              {book.rating && +book.rating > 2 ? (
                <img src={Star}></img>
              ) : (
                <img src={EmptyStar}></img>
              )}
              {book.rating && +book.rating > 3 ? (
                <img src={Star}></img>
              ) : (
                <img src={EmptyStar}></img>
              )}
              {book.rating && +book.rating > 4 ? (
                <img src={Star}></img>
              ) : (
                <img src={EmptyStar}></img>
              )}
              {book.rating && +book.rating > 5 ? (
                <img src={Star}></img>
              ) : (
                <img src={EmptyStar}></img>
              )}
            </div>
          </div>
          <div className={styles.stateLine}>
            <Typography color="secondary">Authors</Typography>
            <Typography className={styles.desc}>{book.authors}</Typography>
          </div>
          <div className={styles.stateLine}>
            <Typography color="secondary">Publisher</Typography>
            <Typography className={styles.desc}>{book.publisher}</Typography>
          </div>
          <div className={styles.stateLine}>
            <Typography color="secondary">Language</Typography>
            <Typography className={styles.desc}>{book.language}</Typography>
          </div>
          <div className={styles.stateLine}>
            <Typography color="secondary">Format</Typography>
            <Typography className={styles.desc}>Paper book / ebook (PDF)</Typography>
          </div>
          <Typography className={styles.more}>More detailse &#11167;</Typography>
          {!isCart ? (
            <Button
              className={styles.button}
              children="add to cart"
              onClick={handleClickCard}
            ></Button>
          ) : (
            <Button className={styles.buttonInCart} children="in cart"></Button>
          )}
          {/* <Button className={styles.button} children="add to cart" onClick={handleClickCard}></Button> */}
          <Typography className={styles.preview}>Preview book</Typography>
        </div>
      </div>
      <Tabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
      {activeTab === "description" && (
        <Typography className={styles.alldesc}>{book.desc}</Typography>
      )}
      {activeTab === "authors" && (
        <Typography className={styles.alldesc}>{book.authors}</Typography>
      )}
      <div className={styles.icons}>
        <Icons name="facebook"></Icons>
        <Icons name="twitter"></Icons>
      </div>
      <Subscribe></Subscribe>
      <NewBooks></NewBooks>
    </>
  );
};

export default BookCard;
