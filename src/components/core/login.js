import React, {useContext} from "react";
import { useForm } from "../../hooks/useForm";
import {call_AUTH} from "../../api/apiHelpers";
import PlantContext from "../../contexts/plantsContext";

function Login(props) {
    const [values, handleChanges] = useForm();
    const {setUserInfo} = useContext(PlantContext);

    function handleSubmit(event) {
        event.preventDefault();

        call_AUTH(values)
            .then((response) => {
                window.localStorage.setItem('token', response.data.token);
                props.history.push('/');
            })
            .catch((error) => {
                console.log(`Login error: ${error}`);
            });

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label><input name="username" value={values.username} placeholder="Username" type="text" onChange={handleChanges}/></label>
                <label><input name="password" value={values.password} placeholder="Password" type="text" onChange={handleChanges}/></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
