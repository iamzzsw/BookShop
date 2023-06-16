import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./Check.module.css";

interface CheckProps {
  sum: number;
}

const Check: React.FC<CheckProps> = ({ sum }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Typography color="secondary">Sum total</Typography>
        <Typography>$ {sum.toFixed(2)}</Typography>
      </div>
      <div className={styles.text}>
        <Typography color="secondary">VAT</Typography>
        <Typography>$ {(sum * 0.18).toFixed(2)}</Typography>
      </div>
      <div className={styles.text}>
        <Typography variant="h2">total</Typography>
        <Typography variant="h2">$ {(sum * 1.18).toFixed(2)}</Typography>
      </div>
      <Button> check out </Button>
    </div>
  );
};

export default Check;
