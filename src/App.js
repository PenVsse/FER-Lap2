


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Navigation from './components/Navigation/Navigation.js';
import Footer from "./components/Footer/Footer";
import ContainerCom from "./components/ContainerCom";
import About from "./components/About/About";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import FilmDetail from './components/Film/FilmDetail'

function App() {
  const { theme, nav, toggle, dark } = useContext(ThemeContext)
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      <Routes>
        <Route path='/' element={<ContainerCom />}>
        </Route>
        <Route path='home' element={<ContainerCom />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:id' element={<FilmDetail />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
