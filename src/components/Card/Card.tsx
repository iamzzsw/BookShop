import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import cn from "classnames";

import Typography from "../Typography/Typography";

interface CardProps {
  title: string;
  subtitle: string;
  isbn13: string;
  image: string;
  url: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, image, url = "/", price }) => {
  const colors = ["orange", "blue", "purple", "green"];
  const randomColor = () => {
    const r = Math.random() * (3 - 0);
    return Math.floor(r);
  };

  return (
    <NavLink to={url} className={styles.link}>
      <div className={styles.container}>
        <div className={cn(styles.image, styles[colors[randomColor()]])}>
          <img src={image} alt={title} loading="lazy" />
        </div>

        <div className={styles.text}>
          <Typography variant="h3" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="p" color="secondary" className={styles.authors}>
            {subtitle}
          </Typography>
          <div className={styles.stateLine}>
            <Typography variant="h3" className={styles.price}>
              {price}
            </Typography>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
