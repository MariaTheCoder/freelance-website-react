import NavigationBar from "./Components/NavigationBar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import "./App.css";

function App() {
  return (
    <header className="App">
      <NavigationBar />
      <Profile />
      <Skills />
    </header>
  );
}

export default App;
