import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "../Typography/Typography";
import styles from "./AccountComponent.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { AppDispatch } from "../../store";
import { getUser } from "../../store/categories/categories.selectors";
import { addUser } from "../../store/categories/categories.reducer";
import { Errors, useForm } from "../../hooks/useForm";
import { UserDefault } from "../../api/types";

export interface defUserInitialValues {
  name: "";
  email: "";
  password: "";
  confirmPassword: "";
}

const getUserFromLocalStore = () => {
  return window.localStorage.getItem("user");
};

export const setUserToLocalStore = (user: string) => {
  window.localStorage.setItem("user", user);
};

const signUpValidation = (values: UserDefault) => {
  const errors: Errors<UserDefault> = {};

  if (!values.name) {
    errors.password = "required field";
  }

  if (!values.email) {
    errors.email = "required field";
  }

  if (!values.password) {
    errors.password = "required field";
  }

  return errors;
};

const AccountComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);
  const { values, errors, setErrors, handleChange, handleSubmit, handleReset } =
    useForm<UserDefault>({
      initialValues: user || ({} as UserDefault),
      validation: signUpValidation,
      onSubmit: (newUserValues) => {
        setUserToLocalStore(JSON.stringify(newUserValues));
        dispatch(addUser(newUserValues));
        setErrors({});
      },
    });
  console.log(values);

  useEffect(() => {
    let currentUser = getUserFromLocalStore();
    if (currentUser) {
      dispatch(addUser(JSON.parse(currentUser)));
    }
  }, []);
  return (
    <>
      <NavLink to="/" className={styles.link}>
        <Typography className={styles.back} variant="h3">
          &#10229;
        </Typography>
      </NavLink>
      <Typography variant="h1" className={styles.title}>
        account
      </Typography>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Typography variant="h3">profile</Typography>
        <div className={styles.group}>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            label="Name"
            value={values?.name}
            onChange={handleChange}
            error={!!errors.name}
          ></Input>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            label="Email"
            value={values?.email}
            onChange={handleChange}
            error={!!errors.email}
          ></Input>
        </div>
        <Typography variant="h3" className={styles.password}>
          Password
        </Typography>
        <div className={styles.input}>
          <Input
            placeholder="Password"
            type="password"
            label="password"
            value={values?.password}
            onChange={handleChange}
            error={!!errors.password}
            name="password"
            readOnly
          ></Input>
        </div>

        <div className={styles.group}>
          <Input placeholder="New password" label="New password"></Input>
          <Input placeholder="Confirm new password" label="Confirm new password"></Input>
        </div>
        <div className={styles.button}>
          <Button type="submit" className={styles.saveBut}>
            Save changes
          </Button>
          <Button type="reset" color="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default AccountComponent;
