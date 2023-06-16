import React from "react";

import styles from "./Input.module.css";
import Typography from "../Typography/Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  helpedText?: string;
  label?: string;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, name, value, placeholder, onChange, label, error = false, helpedText, ...props}, ref) => {
    return (
      <div className={styles.container}>
        {!!label && (
          <Typography variant="p" className={styles.label}>
            {label}
          </Typography>
        )}
        <br />
        <input
          ref={ref}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          type={type}
          name={name}
          className={styles.input}
          value={value}
          {...props}
        ></input>
        {helpedText && <span className={styles.helpTextError}> {helpedText} </span>}
      </div>
    );
  }
);

export default Input;
