import { Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddVehicle from "./pages/AddVehicle";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} exact></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add-vehicle" element={<AddVehicle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
