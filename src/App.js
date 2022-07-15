import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
}

export default App;
