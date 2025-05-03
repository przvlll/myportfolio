import { Routes, Route } from "react-router-dom";
import PortfolioWebsite from "./components/PortfolioWebsite";
import Blogpost1 from "./pages/Blogpost1";
import Blogpost2 from "./pages/Blogpost2";
import Blogpost3 from "./pages/Blogpost3";
import Blogpost4 from "./pages/Blogposts4";
import Blogpost5 from "./pages/Blogpost5";
import Blogpost6 from "./pages/Blogpost6";
import Blogpost7 from "./pages/Blogpost7";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioWebsite />} />
        <Route path="/day1" element={<Blogpost1 />} />
        <Route path="/day2" element={<Blogpost2 />} />
        <Route path="/day3" element={<Blogpost3 />} />
        <Route path="/day4" element={<Blogpost4 />} />
        <Route path="/day5" element={<Blogpost5 />} />
        <Route path="/day6" element={<Blogpost6 />} />
        <Route path="/day7" element={<Blogpost7 />} />
      </Routes>
    </>
  );
}

export default App;
