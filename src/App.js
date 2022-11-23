import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutStyled from "./pages/AboutStyled";
import AboutToastify from "./pages/AboutToastify";
import FakeLogin from "./pages/FakeLogin";

/* Import Your Files Below This Line*/
import {GlobalStyles} from './components/styled/Global.styled'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <ToastContainer/>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styled" element={<AboutStyled />} />
        <Route path="/toasty" element={<AboutToastify />} />
        <Route path="/login" element={<FakeLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
