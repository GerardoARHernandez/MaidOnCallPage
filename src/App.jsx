import { Routes, Route, Link} from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Nav/Header";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import GiftCertificatesPage from "./pages/GiftCertificatesPage";
import BlogPage from "./pages/BlogPage";
import ServiceRoutes from "./routes/ServiceRoutes";
import BlogRoutes from "./routes/BlogRoutes";
import JoinOurTeam from "./pages/JoinOurTeam";
import GiftCard from "./pages/GiftCard";
import Privacy from "./pages/Privacy";


function App() {

  return (
    <>
      <Header />
      <div className="font-poppins">
          <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="faq" element={ <FAQPage /> } />
            <Route path="blog" element={ <BlogPage /> } />
            <Route path="blog/*" element={<BlogRoutes />} /> {/* Aquí se anidan las rutas del blog */}
            <Route path="contact" element={ <ContactPage /> } />
            <Route path="certificates" element={ <GiftCertificatesPage /> } />
            <Route path="product/demo" element={ <GiftCard /> } />
            <Route path="join-our-team" element={ <JoinOurTeam /> } />
            <Route path="privacy" element={ <Privacy /> } />
          </Routes>
            <ServiceRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
