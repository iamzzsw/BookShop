import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Main from "../pages/Main/Main";
import Book from "../pages/Book";
import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";

const PublicRouter: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/favorites/" element={<Favorite />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/signIn/" element={<SignIn />} />
        <Route path="/account/" element={<Account />} />
        {/* <Route path="/search/:booksName" element={<Main />} /> */}
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default PublicRouter;
