import BooksComponent from "../../components/BooksComponent/BooksComponent";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Main = () => {
  return <MainLayout header={<Header />} content={<BooksComponent />} footer={<Footer />} />;
};

export default Main;
