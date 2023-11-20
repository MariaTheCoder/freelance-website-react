import NavigationBar from "./Components/NavigationBar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <header className="App">
      <NavigationBar />
      <Profile />
      <Skills />
      <Projects />
      <Articles />
      <Footer />
    </header>
  );
}

export default App;
