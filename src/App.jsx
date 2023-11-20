import { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([
    {
      date: "2023-12-10",
      title: "Some title",
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      date: "2023-10-02",
      title: "Some title",
      link: "https://en.wikipedia.org/wiki/IBM_i",
    },
    {
      date: "2023-08-20",
      title: "Some title",
      link: "https://en.wikipedia.org/wiki/World_Wide_Web",
    },
    {
      date: "2023-07-31",
      title: "Some title",
      link: "https://en.wikipedia.org/wiki/Computer",
    },
  ]);
  return (
    <header className="App">
      <NavigationBar />
      <Profile />
      <Skills />
      <Projects />
      <Articles articles={articles} />
      <Footer />
    </header>
  );
}

export default App;
