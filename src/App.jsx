import "./index.css";
import "./fonts.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Candidates from "./pages/Candidates";
import Archives from "./pages/Archives";
import Header from "./components/ArchivesHeader";
import Editorial from "./pages/Editorial";
import YearInReview from "./pages/YearInReview";
import Footer from "./components/Footer";
import Presidents from "./pages/Presidents";
import VicePresidents from "./pages/VicePresidents";
import SchoolReps from "./pages/SchoolReps";
import President from "./pages/President";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="/" element={<Home />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/president" element={<Presidents />} />
          <Route path="/candidates/president/:name" element={<President />} />

          <Route
            path="/candidates/vice-president"
            element={<VicePresidents />}
          />
          <Route
            path="/candidates/school-representatives"
            element={<SchoolReps />}
          />

          <Route path="/a-year-in-review" element={<YearInReview />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
