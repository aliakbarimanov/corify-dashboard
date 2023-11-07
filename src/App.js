// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registartion from "./pages/Registration";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCars from "./pages/AllCars";
import CreateCar from "./pages/CreateCar";
import EditCar from "./pages/EditCar";
import ChangePassword from "./pages/ChangePassword";

// import ProtectedRoutes
import ProtectedRoutes from "./routes/ProtectedRoutes";

// import MainContext
import { MainContext } from "./utils/MainContext";

const App = () => {
  return (
    <MainContext>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/create-car" element={<CreateCar />} />
          <Route path="/edit-car" element={<EditCar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registartion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MainContext>
  );
};

export default App;
