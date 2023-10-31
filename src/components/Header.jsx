// Router
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../assets/images/logo.webp";

// Icons
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

// import useContext, Context
import { useContext } from "react";
import { Context } from "../utils/MainContext";

const Header = () => {

  const { logOut, userIn } = useContext(Context);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="navBar">
            {
              userIn && (
                <ul className="navList">
                  <li className="navItem">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/all-cars">All Cars</NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/create-car">Add new car</NavLink>
                  </li>
                </ul>
              )
            }
          </nav>
          <div className="userArea">
            {
              userIn && (
                <Link className="profile" to="/profile">PROFILE</Link>
              )
            }
            {
              userIn ? (
                <button className="logOut" onClick={logOut}>
                  LOG OUT
                  <FaSignOutAlt />
                </button>

              ) : (
                <Link className="login" to="/login">
                  <FaUserCircle />
                  <span>LOG IN</span>
                </Link>

              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
