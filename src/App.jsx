import MainLayout from "./components/MainLayout";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";
import "./styles/Global.css";
import { useState } from "react";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <MainLayout>
        <NavBar setActiveSection={setActiveSection}></NavBar>
        <Content activeSection={activeSection}></Content>
        <Footer></Footer>
        <Bottom></Bottom>
      </MainLayout>
    </>
  );
}
function App() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;
