import { Routes, Route, Link} from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";


function App() {

  return (
    <>
      <Header />
      <div className="font-poppins">
          <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="about" element={ <AboutPage /> } />
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
