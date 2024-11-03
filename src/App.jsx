// import { useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
// import Header from './Header.jsx'
//import Tickets from './Body.jsx'
import Login from "./components/Login.jsx";
import Tickets from "./components/Tickets.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
import Home from "./components/Home.jsx";
import TicketCreation from "./pages/TicketCreation.jsx";

function App() {
  // const [count, setCount] = useState(0)
  // const isLoggedIn = localStorage.getItem("userInfo");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}>
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/newTicket" element={<TicketCreation />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
