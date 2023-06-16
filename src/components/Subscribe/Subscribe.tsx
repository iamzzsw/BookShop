import styles from "./Subscribe.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const Subscribe = () => {
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Typography variant="h2">Subscribe to Newsletter</Typography>
        <Typography>
          Be the first to know about new IT books, upcoming releases, exclusive offers and more.
        </Typography>
      </div>
      <div className={styles.input_container}>
        <input className={styles.input} type="text" placeholder="Your email"></input>
        <div className={styles.button}>
          <Button onClick={handleClick}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
