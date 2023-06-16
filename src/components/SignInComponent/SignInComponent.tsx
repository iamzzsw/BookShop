import React, { useEffect, useRef, useState } from "react";
import styles from "./SignInComponent.module.css";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { validateFormBeforeSubmit } from "./helpers/helper";
import { useDispatch } from "react-redux";

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
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const dispach = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "Name") {
      setValues({ ...values, email: value });
    } else if (name === "Password") {
      setValues({ ...values, password: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const curErrors = validateFormBeforeSubmit(
      values,
      JSON.parse(localStorage.getItem("user") as string)
    );
    console.log(curErrors);

    if (curErrors) {
      setErrors(curErrors);
    } else {
      console.log(values);
      setErrors({});
      setValues(initialValues);
      navigate(`/`);
      //   dispach(addUser)
    }
  };

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
            name="Name"
            value={values.email}
            error={!!errors.email}
            helpedText={errors.email}
          ></Input>
          <Input
            label="Password"
            placeholder="Your password"
            onChange={handleChange}
            type="password"
            name="Password"
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
