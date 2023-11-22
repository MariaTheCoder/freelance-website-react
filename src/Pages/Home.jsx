import { useState } from "react";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Articles from "../Components/Articles";
import style from "./Home.module.css";

function Home() {
  const [articles, setArticles] = useState([
    {
      date: "2023-12-10",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      date: "2023-10-02",
      title: "Sed tincidunt eget risus in finibus",
      link: "https://en.wikipedia.org/wiki/IBM_i",
    },
    {
      date: "2023-08-20",
      title: "Vestibulum viverra magna elit, a elementum velit viverra at",
      link: "https://en.wikipedia.org/wiki/World_Wide_Web",
    },
    {
      date: "2023-07-31",
      title:
        "Ut placerat, arcu faucibus blandit fringilla, leo libero feugiat mauris, vitae pulvinar nunc ligula eget neque",
      link: "https://en.wikipedia.org/wiki/Computer",
    },
  ]);
  return (
    <header className={style["Home"]}>
      <Profile />
      <Skills />
      <Projects />
      <Articles articles={articles} />
    </header>
  );
}

export default Home;
