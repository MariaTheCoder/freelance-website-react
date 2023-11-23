import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.css";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className={style["rootLayout"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
