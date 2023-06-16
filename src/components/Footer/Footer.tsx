import React, { useLayoutEffect, useState } from "react";
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
      <Typography>&copy;2022 Bookstore</Typography>
      <div className={styles.theme}>
        {/* <label htmlFor="theme">
          <Typography color="secondary" variant="p">
            {themeName}
          </Typography>
        </label>
        <input type="checkbox" name="theme" id="theme" onChange={changeTheme} /> */}
        <button onClick={changeTheme}>{themeName}</button>
      </div>
      <Typography>All rights reserved</Typography>
    </div>
  );
};

export default Footer;
