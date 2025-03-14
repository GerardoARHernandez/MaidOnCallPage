import { Routes, Route } from "react-router-dom"
import TipsForCleaning from "../pages/blog/TipsForCleaning"
import OriginMothersDay from "../pages/blog/OriginMothersDay"
import CleanMattress from "../pages/blog/CleanMattress"
import Dishwasher from "../pages/blog/Dishwasher"
import HomeFlavored from "../pages/blog/HomeFlavored"
import TipsCurtains from "../pages/blog/TipsCurtains"
import TricksChildren from "../pages/blog/TricksChildren"
import FileDocuments from "../pages/blog/FileDocuments"
import ChangeSeason from "../pages/blog/ChangeSeason"
import CleaningHealth from "../pages/blog/CleaningHealth"
import DifferenceSanitizer from "../pages/blog/DifferenceSanitizer"
import HealthBenefits from "../pages/blog/HealthBenefits"


const BlogRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="tips-for-cleaning-and-disinfecting-your-garbage-collector" element={<TipsForCleaning/> } />
            <Route path="origin-of-mothers-day-why-that-give-away-flowers" element={<OriginMothersDay/> } />
            <Route path="how-to-clean-your-mattress" element={<CleanMattress/> } />
            <Route path="how-to-wash-the-dishwasher" element={<Dishwasher/> } />
            <Route path="keep-your-home-flavored" element={<HomeFlavored/> } />
            <Route path="follow-these-tips-to-wash-your-fabric-curtains" element={<TipsCurtains/> } />
            <Route path="tricks-to-keep-the-childrens-room-ordered-and-gain-space" element={<TricksChildren/> } />
            <Route path="how-to-file-documents-at-home-and-in-the-office" element={<FileDocuments/> } />
            <Route path="change-of-season-to-order-the-closet" element={<ChangeSeason/> } />
            <Route path="cleaning-is-health-and-safety-in-your-home" element={<CleaningHealth/> } />
            <Route path="difference-sanitizers-and-disinfectants" element={<DifferenceSanitizer/> } />
            <Route path="5-health-benefits-of-a-clean-home-that-will-surprise-you" element={<HealthBenefits/> } />
        </Routes>
    
    </>
  )
}

export default BlogRoutes