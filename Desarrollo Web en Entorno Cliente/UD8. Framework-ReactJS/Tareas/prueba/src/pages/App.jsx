import Header from '../components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
//import "/src/style/style.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Header />
      <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </>
      <Footer />
      </Routes>
    </BrowserRouter>
  )
}

export default App
