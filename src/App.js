import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import './App.css';

import TrabajaEnNire from "./pages/TrabajaEnNire/TrabajaEnNire";

function App() {
  return (
    <div className="App container">
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/trabaja-en-nire" element={<TrabajaEnNire/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
