import FavoriteComponent from "../components/FavoriteComponent/FavoriteComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Favorite = () => {
  return <MainLayout header={<Header />} content={<FavoriteComponent />} footer={<Footer />} />;
};

export default Favorite;
