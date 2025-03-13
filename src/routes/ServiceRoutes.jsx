import { Routes, Route, Link} from "react-router-dom";
import HouseCleaningPage from "../pages/Services/HouseCleaningPage";
import OfficeCleaningPage from "../pages/Services/OfficeCleaningPage";
import AppartmentCleaningPage from "../pages/Services/AppartmentCleaningPage";
import MoveInCleaning from "../pages/Services/MoveInCleaning";
import PostConstruction from "../pages/Services/PostConstruction";
import ShortTermPage from "../pages/Services/ShortTermPage";
import OneTime from "../pages/Services/OneTime";
import SpringCleaning from "../pages/Services/SpringCleaning";
import DeepCleaning from "../pages/Services/DeepCleaning";
import Sanitize from "../pages/Services/Sanitize";

const ServiceRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="regular-house-cleaning-ottawa" element={ <HouseCleaningPage /> } />
            <Route path="office-cleaning-ottawa" element={ <OfficeCleaningPage /> } />
            <Route path="apartment-condo-cleaning-ottawa" element={ <AppartmentCleaningPage /> } />
            <Route path="move-in-cleaning-ottawa" element={ <MoveInCleaning /> } />
            <Route path="post-construction-cleaning-ottawa" element={ <PostConstruction /> } />
            <Route path="short-term-rental-airbnb-ottawa" element={ <ShortTermPage /> } />
            <Route path="one-time-regular-cleaning" element={ <OneTime /> } />
            <Route path="spring-cleaning-ottawa" element={ <SpringCleaning /> } />
            <Route path="deep-house-cleaning-ottawa" element={ <DeepCleaning /> } />
            <Route path="desinfection-services-ottawa" element={ <Sanitize /> } />

        </Routes>
    
    </>
  )
}

export default ServiceRoutes