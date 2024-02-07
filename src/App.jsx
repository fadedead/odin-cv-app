import "./styles/app.css";
import { Header } from "./components/Header.jsx";
import { PersonalInformation } from "./components/PersonalInformation.jsx";
import { EducationalInformation } from "./components/EducationalInformation.jsx";
import { ExperienceInformation } from "./components/ExperienceInformation.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <PersonalInformation />
      <EducationalInformation />
      <ExperienceInformation />
      <Footer />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export { App };
