import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavProject from "../components/Nav/NavProject";
import Project from "../components/Project/Project";

function ProjectsPage() {
  return (
    <>
      <Header />
      <NavProject />
      <Project />
      <Contacts />
      <Footer />
    </>
  );
}

export default ProjectsPage;
