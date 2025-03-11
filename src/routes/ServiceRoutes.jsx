import { Routes, Route, Link} from "react-router-dom";
import HouseCleaningPage from "../pages/Services/HouseCleaningPage";
import OfficeCleaningPage from "../pages/Services/OfficeCleaningPage";

const ServiceRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="regular-house-cleaning-ottawa" element={ <HouseCleaningPage /> } />
            <Route path="office-cleaning-ottawa" element={ <OfficeCleaningPage /> } />

        </Routes>
    
    </>
  )
}

export default ServiceRoutes