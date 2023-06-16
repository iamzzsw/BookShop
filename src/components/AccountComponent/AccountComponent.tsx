import { NavLink } from "react-router-dom";
import Typography from "../Typography/Typography";
import styles from "./AccountComponent.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/categories/categories.selectors";
import { addUser } from "../../store/categories/categories.reducer";
import { useForm } from "../../hooks/useForm";
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

const AccountComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);
  const { values, handleChange, handleSubmit,handleReset } = useForm<UserDefault>({
    initialValues: user || {} as UserDefault,
    onSubmit: (newUserValues) => {
      setUserToLocalStore(JSON.stringify(newUserValues))
      dispatch(addUser(newUserValues));
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
          ></Input>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            label="Email"
            value={values?.email}
            onChange={handleChange}
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
            name="password"
            readOnly
          ></Input>
        </div>

        <div className={styles.group}>
          <Input placeholder="New password" label="New password"></Input>
          <Input placeholder="Confirm new password" label="Confirm new password"></Input>
        </div>
        <div className={styles.button}>
          <Button type='submit'>Save changes</Button>
          <Button type='reset'>Save changes</Button>
        </div>
      </form>
    </>
  );
};

export default AccountComponent;
