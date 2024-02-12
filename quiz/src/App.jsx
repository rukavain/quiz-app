import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/date" element={<SecondPage />}></Route>
          <Route path="/food" element={<ThirdPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
