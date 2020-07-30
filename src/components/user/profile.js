import React, {useContext} from "react";
import UserContext from "../../contexts/userContext";

function Profile() {
    const {user} = useContext(UserContext);

    console.log(user);

    if(user) {
        return(
            <div>
                <h3>Username: {user.username}</h3>
                <p>Phone Number: {user.phoneNumber}</p>
            </div>
        );
    } else {
        return(
            <div>
                Loading ...
            </div>
        );
    }
}

export default Profile;
