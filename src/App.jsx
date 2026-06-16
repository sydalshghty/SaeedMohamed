import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Whatsapp from "./components/whatsapp";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import { useEffect } from "react";
function App() {
  const savetheme = localStorage.getItem("theme");
  if (savetheme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Whatsapp />
    </>
  )
}
export default App;
