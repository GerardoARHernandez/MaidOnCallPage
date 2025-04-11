import { Routes, Route, Link} from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Nav/Header";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import GiftCertificatesPage from "./pages/GiftCertificatesPage";
import BlogPage from "./pages/BlogPage";
import BlogRoutes from "./routes/BlogRoutes";
import JoinOurTeam from "./pages/JoinOurTeam";
import GiftCard from "./pages/GiftCard";
import Privacy from "./pages/Privacy";
import ScrollTop from "./components/ScrollTop";

// servicios
import HouseCleaningPage from "./pages/Services/HouseCleaningPage";
import OfficeCleaningPage from "./pages/Services/OfficeCleaningPage";
import AppartmentCleaningPage from "./pages/Services/AppartmentCleaningPage";
import MoveInCleaning from "./pages/Services/MoveInCleaning";
import PostConstruction from "./pages/Services/PostConstruction";
import ShortTermPage from "./pages/Services/ShortTermPage";
import OneTime from "./pages/Services/OneTime";
import SpringCleaning from "./pages/Services/SpringCleaning";
import DeepCleaning from "./pages/Services/DeepCleaning";
import Sanitize from "./pages/Services/Sanitize";
import MoveOutCleaning from "./pages/Services/MoveOutCleaning";
import PostRenovation from "./pages/Services/PostRenovation";
import CleaningOrg from "./pages/Services/CleaningOrg";
import Declutter from "./pages/Services/Declutter";
import PreparationForSale from "./pages/Services/PreparationForSale";
import StagingBasic from "./pages/Services/StagingBasic";
import SpecialRequests from "./pages/Services/SpecialRequests";

//Blog
import HealthBenefits from "./pages/blog/HealthBenefits"


function App() {

  return (
    <>
      <Header />
      <div className="font-poppins">
          <ScrollTop />
          <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="faq" element={ <FAQPage /> } />
            <Route path="blog" element={ <BlogPage /> } />
            <Route path="contact" element={ <ContactPage /> } />
            <Route path="certificates" element={ <GiftCertificatesPage /> } />
            <Route path="product/demo" element={ <GiftCard /> } />
            <Route path="join-our-team" element={ <JoinOurTeam /> } />
            <Route path="privacy" element={ <Privacy /> } />

            <Route path="blog/*" element={<BlogRoutes />} /> {/* Aquí se anidan las rutas del blog */}
            <Route path="blog/5-health-benefits-of-a-clean-home-that-will-surprise-you" element={<HealthBenefits/> } />

            {/* Servicios */}
            <Route path="regular-house-cleaning-ottawa" element={ <HouseCleaningPage /> } />
            <Route path="office-cleaning-ottawa" element={ <OfficeCleaningPage /> } />
            <Route path="apartment-condo-cleaning-ottawa" element={ <AppartmentCleaningPage /> } />
            <Route path="move-in-cleaning-ottawa" element={ <MoveInCleaning /> } />
            <Route path="move-out-cleaning-ottawa" element={ <MoveOutCleaning /> } />
            <Route path="post-construction-cleaning-ottawa" element={ <PostConstruction /> } />
            <Route path="post-renovation-cleaning-ottawa" element={ <PostRenovation /> } />
            <Route path="short-term-rental-airbnb-ottawa" element={ <ShortTermPage /> } />
            <Route path="one-time-regular-cleaning" element={ <OneTime /> } />
            <Route path="spring-cleaning-ottawa" element={ <SpringCleaning /> } />
            <Route path="deep-house-cleaning-ottawa" element={ <DeepCleaning /> } />
            <Route path="desinfection-services-ottawa" element={ <Sanitize /> } />
            <Route path="cleaning-and-organization-ottawa" element={ < CleaningOrg /> } />
            <Route path="declutter-ottawa" element={ < Declutter /> } />
            <Route path="home-preparation-for-sale-cleaning-service-ottawa" element={ <PreparationForSale /> } />
            <Route path="home-staging-basic-ottawa" element={ <StagingBasic /> } />
            <Route path="add-on-special-requests" element={ <SpecialRequests /> } />

          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
