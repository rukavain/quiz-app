import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import LastPage from "./pages/LastPage";
import FourthPage from "./pages/FourthPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/date" element={<SecondPage />}></Route>
          <Route path="/food" element={<ThirdPage />}></Route>
          <Route path="/desert" element={<FourthPage />}></Route>
          <Route path="/valentinesday" element={<LastPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
