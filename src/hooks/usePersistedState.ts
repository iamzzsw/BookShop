import { useEffect } from "react";
import { useState } from "react";

interface UsePersistedStateConf<T> {
  initialValue: T;
  key: string;
  storageType?: "local" | "session";
}

const getStorage = (storageType: "local" | "session"): Storage => {
  return storageType === "local" ? window.localStorage : window.sessionStorage;
};

export const usePersistedState = <T>({
  initialValue,
  key,
  storageType = "local",
}: UsePersistedStateConf<T>) => {
  const [state, setState] = useState<T>(() => {
    const valueFromStorage = getStorage(storageType).getItem(key);
    return valueFromStorage === null ? initialValue : JSON.parse(valueFromStorage);
  });

  useEffect(() => {
    getStorage(storageType).setItem(key, JSON.stringify(state));
  }, [state, storageType, key]);

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (key === event.key && event.newValue) {
        getStorage(storageType).setItem(key, event.newValue);
        setState(JSON.parse(event.newValue));
      }
    });
  }, [key, storageType]);

  return [state, setState] as const;
};
