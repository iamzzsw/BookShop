import { useCallback, useState } from "react";
import { useDidUpdate } from "./useDidUpdate";

export type Errors<T> = Partial<Record<keyof T, string>>;

export const useForm = <T>(config: {
  initialValues: T;
  onSubmit: (formValues: T) => void;
  validation?: (formValues: T) => Errors<T>;
}) => {
  const { initialValues, onSubmit, validation } = config;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation) {
      onSubmit(values);
      return;
    }

    const errors = validation(values);
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    } else {
      setErrors(errors);
    }
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setValues(initialValues);
    setErrors({})
  }

  useDidUpdate(() => {
    setValues(initialValues)
  }, [initialValues])

  return { values, errors, setErrors, handleChange, handleSubmit, setValues, handleReset };
};
