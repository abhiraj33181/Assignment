import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CancerAwareness from "./pages/CancerAwareness";
import DonationDashboard from "./pages/DonationDashboard";

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>

      <header className="navbar">
        <h1 className="brand">Heal & Hope ✨</h1>
      </header>

      <main className="content">
        <h2 className="title">
          Together we <span>Fight</span> Cancer 💙
        </h2>
        <p className="subtitle">
          Awareness. Support. Humanity. Let’s build stronger communities.
        </p>

        <div className="btn-group">
          <Link to='/cancer-awareness' className="btn primary">
            🌸 Cancer Awareness
          </Link>
          <Link to='/donation-dashboard' className="btn secondary">
            📊 Donation Dashboard
          </Link>
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Heal & Hope Initiative 💗
      </footer>

    </div>
  )
}
function App() {
  return (
     <>
     

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cancer-awareness" element={<CancerAwareness/>} />
        <Route path="/donation-dashboard" element={<DonationDashboard/>} />
      </Routes>
     </>
  );
}

export default App;
