import React from "react";
import {call_register} from "../../api/apiHelpers";

function Register() {

    function handleSubmit(event) {
        event.preventDefault();
        let newUser = {
            username: event.target.username.value,
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
        };

        call_register(newUser)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="username" placeholder="Username"/>
                </label>
                <label>
                    <input type="text" name="phoneNumber" placeholder="Phone Number"/>
                </label>
                <label>
                    <input type="text" name="password" placeholder="Password"/>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
