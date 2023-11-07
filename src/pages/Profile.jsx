import { useContext } from "react";
import { Context } from "../utils/MainContext";
import axios from "axios";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(Context);

  const onChange = async (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const profileImage = e.target.files[0];

    const body = new FormData();
    body.append("token", token);
    body.append("profileImage", profileImage);

    await axios
      .put("http://localhost:8000/api/users/profile", body)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="profilePage">
      <div className="container">
        <div className="row">
          <h1 className="profileTitle">
            Welcome {user.name} {user.surname}
          </h1>
          <div className="profileBox">
            <div className="profileImg">
              {user.profileImage ? (
                <img
                  src={`http://localhost:8000/${user.profileImage}`}
                  alt="profile-image"
                />
              ) : (
                <img src={logo} alt="profile-image" />
              )}
            </div>
            <div className="profileInfo">
              <h2 className="userInfo">{user.name}</h2>
              <h2 className="userInfo">{user.surname}</h2>
              <h2 className="userInfo">{user.email}</h2>
              <Link className="changePsw" to="/change-password">
                Change password
              </Link>
              <input type="file" onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
