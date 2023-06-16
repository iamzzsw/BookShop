import CartComponent from "../components/CartComponent/CartComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Favorite = () => {
  return <MainLayout header={<Header />} content={<CartComponent />} footer={<Footer />} />;
};

export default Favorite;
