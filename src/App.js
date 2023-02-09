
import './App.css';
import ContainerCom from './components/ContainerCom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';

function App() {
  const { theme, nav, toggle, dark } = useContext(ThemeContext)
  return (
    <> <Navigation />

      <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ContainerCom />
        <Footer />

      </div></>

  );
}

export default App;
