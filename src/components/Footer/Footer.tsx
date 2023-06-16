import { useLayoutEffect, useState } from "react";

import styles from "./Footer.module.css";
import Typography from "../Typography/Typography";
import { usePersistedState } from "../../hooks/usePersistedState copy";

const Footer = () => {
  const [themeName, setThemeName] = usePersistedState<"dark" | "light">({
    initialValue: "light",
    key: "theme",
  });

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = themeName;
  }, [themeName]);

  return (
    <div className={styles.container}>
      <Typography>&copy;2023 Bookstore</Typography>
      <div className={styles.theme}>
        <button onClick={changeTheme} className={styles.button}>
          {themeName}
        </button>
      </div>
      <Typography>All rights reserved</Typography>
    </div>
  );
};

export default Footer;
