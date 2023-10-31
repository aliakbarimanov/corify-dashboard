import { useContext } from "react";
import { Context } from "../utils/MainContext";

const Profile = () => {

    const { user } = useContext(Context);

    return (
        <section className="profilePage">
            <div className="container">
                <div className="row">
                    <h1 className="profileTitle">Welcome {user.name} {user.surname}</h1>
                    <div className="profileBox">
                        <div className="profileImg">
                            <img src="https://freepngimg.com/thumb/strawberry/1-strawberry-png-images.png" alt="profile-image" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="userInfo">{user.name}</h2>
                            <h2 className="userInfo">{user.surname}</h2>
                            <h2 className="userInfo">{user.email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;