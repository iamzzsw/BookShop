import React from "react";

import Button from "../Button/Button";

import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ loading, onClick }) => {
  return (
    <div className={styles.buttonWrapper}>
      <Button onClick={onClick}>{loading ? "loading..." : "load more"}</Button>
    </div>
  );
};

export default LoadMoreButton;
