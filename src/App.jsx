import "./index.css";
import "./fonts.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Candidates from "./pages/Candidates";
import Archives from "./pages/Archives";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="/" element={<Home />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

//TODO: PUT NAV BAR AND FOOTER HERE
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
