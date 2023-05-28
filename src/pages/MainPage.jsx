import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Tech from "../components/Tech/Tech";
import Title from "../components/Title/Title";

function MainPage() {
  return (
    <>
      <Header />
      <Title />
      <Services />
      <About />
      <Tech />
      <Contacts />
      <Footer />
    </>
  );
}

export default MainPage;
