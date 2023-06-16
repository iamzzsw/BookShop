import AccountComponent from "../components/AccountComponent/AccountComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Account = () => {
  return <MainLayout header={<Header />} content={<AccountComponent />} footer={<Footer />} />;
};

export default Account;
