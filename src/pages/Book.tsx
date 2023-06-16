import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SelectedBook from "../components/SelectedBook/SelectedBook";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Book = () => {
  return <MainLayout header={<Header />} content={<SelectedBook />} footer={<Footer />} />;
};

export default Book;
