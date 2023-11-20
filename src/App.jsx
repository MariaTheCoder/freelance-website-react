import NavigationBar from "./Components/NavigationBar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import "./App.css";

function App() {
  return (
    <header className="App">
      <NavigationBar />
      <Profile />
      <Skills />
      <Projects />
      <Articles />
    </header>
  );
}

export default App;
