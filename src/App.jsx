import { Introduction } from "./components/1.Introduction.jsx";
import { Tech } from "./components/2.Tech.jsx";
import { Projects } from "./components/3.Projects.jsx";
import { Footer } from "./components/7.Footer.jsx"

export const App = () => {
  return (
    <>
      <Introduction />
      <Tech />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
