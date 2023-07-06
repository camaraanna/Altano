import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import HomePage from "./pages/Home/HomePage";
import ArtistsPage from "./pages/ArtistsPage";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <div>
    <ScrollToTop />
      <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route path="/artist-page/:dataId" element={<ArtistsPage />} />
        <Route path="Reservation/" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
