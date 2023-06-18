import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SignInComponent.module.css";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { validateFormBeforeSubmit } from "./helpers/helper";
import { useForm } from "../../hooks/useForm";

export interface FormValues {
  email: string;
  password: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

const initialValues = {
  email: "",
  password: "",
};

export const defUserData = {
  name: "Igor",
  email: "igor@gmail.com",
  password: 1234,
};

const SignInComponent: React.FC = () => {
  const {values,setValues,  errors, setErrors, handleChange, handleSubmit} = useForm<FormValues>({
    initialValues: initialValues,
    onSubmit: () => {
    const curErrors = validateFormBeforeSubmit(
      values,
      JSON.parse(localStorage.getItem("user") as string)
    );
    if (curErrors) {
      setErrors(curErrors);
    } else {
      setErrors({});
      setValues(initialValues);
      navigate(`/`);
    }
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage === null) {
      localStorage.setItem("user", JSON.stringify(defUserData));
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography variant="h3">sign in</Typography>
          <hr className={styles.line}></hr>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            placeholder="Your email"
            onChange={handleChange}
            type="text"
            name="email"
            value={values?.email}
            error={!!errors.email}
            helpedText={errors.email}
          ></Input>
          <Input
            label="password"
            placeholder="Your password"
            onChange={handleChange}
            type="password"
            name="password"
            value={values.password}
            error={!!errors.password}
            helpedText={errors.password}
          ></Input>
          <Typography className={styles.text}>Fogot password?</Typography>
          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default SignInComponent;
