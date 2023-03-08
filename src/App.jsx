import "./index.css";
import "./fonts.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Candidates from "./pages/Candidates";
import Archives from "./pages/Archives";
import Header from "./components/Header";
import Editorial from "./pages/Editorial";
import YearInReview from "./pages/YearInReview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="/" element={<Home />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/a-year-in-revew" element={<YearInReview />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

//TODO: PUT NAV BAR AND FOOTER HERE
function Layout() {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  );
}

export default App;
