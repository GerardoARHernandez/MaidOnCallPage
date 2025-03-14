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
import MoveOutCleaning from "../pages/Services/MoveOutCleaning";
import PostRenovation from "../pages/Services/PostRenovation";
import CleaningOrg from "../pages/Services/CleaningOrg";
import Declutter from "../pages/Services/Declutter";
import PreparationForSale from "../pages/Services/PreparationForSale";
import StagingBasic from "../pages/Services/StagingBasic";
import SpecialRequests from "../pages/Services/SpecialRequests";

const ServiceRoutes = () => {
  return (
    <>
        <Routes>
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
    
    </>
  )
}

export default ServiceRoutes