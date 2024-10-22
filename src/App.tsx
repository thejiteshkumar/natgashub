import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import { Sidenav } from "./components/Sidebar/Sidenav";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidenav />
        <div style={{ flex: 1, padding: "20px" }}>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
