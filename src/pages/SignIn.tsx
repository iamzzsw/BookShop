import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SignInComponent from "../components/SignInComponent/SignInComponent";
import MainLayout from "../layouts/MainLayout/MainLayout";

const SignIn = () => {
  return <MainLayout header={<Header />} content={<SignInComponent />} footer={<Footer />} />;
};

export default SignIn;
