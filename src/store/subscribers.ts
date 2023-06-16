import store from ".";
import { ExtendedBook } from "../api/types";
import { getCategoriesSlice } from "./categories/categories.selectors";

let prevFavorites: null | ExtendedBook[] = null;
let prevCart: null | ExtendedBook[] = null;
export const sub = () => {
  const { favorite, cart } = getCategoriesSlice(store.getState());
  if (prevCart !== cart) {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    prevFavorites = cart;
  }
  if (prevFavorites !== favorite) {
    window.localStorage.setItem("favorites", JSON.stringify(favorite));
    prevFavorites = favorite;
  }
};
