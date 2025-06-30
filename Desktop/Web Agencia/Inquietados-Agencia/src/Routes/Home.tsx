import About from "../components/home/About";
import Featured from "../components/home/Featured";
import Header from "../components/home/Header";
// import LogoContainer from "../components/home/LogoContainer";
import TextContainer from "../components/home/TextContainer";
// import Form from "../components/Form";
// import Prueba from "../components/home/prueba";

const Home = () => {
  return (
    <>
      <Header />
      {/* <LogoContainer /> */}
      <TextContainer />
      <About />
      <Featured />
    </>
  );
};

export default Home;
