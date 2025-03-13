import { Routes, Route } from "react-router-dom"
import TipsForCleaning from "../pages/blog/TipsForCleaning"
import OriginMothersDay from "../pages/blog/OriginMothersDay"
import CleanMattress from "../pages/blog/CleanMattress"
import Dishwasher from "../pages/blog/Dishwasher"
import HomeFlavored from "../pages/blog/HomeFlavored"
import TipsCurtains from "../pages/blog/TipsCurtains"
import TricksChildren from "../pages/blog/TricksChildren"
import FileDocuments from "../pages/blog/FileDocuments"


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
        </Routes>
    
    </>
  )
}

export default BlogRoutes