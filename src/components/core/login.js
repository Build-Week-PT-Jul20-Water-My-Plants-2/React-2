import React, {useContext} from "react";
import { useForm } from "../../hooks/useForm";
import {call_AUTH} from "../../api/apiHelpers";
import {withRouter} from "react-router-dom";
import AuthContext from "../../contexts/authContext";

function Login(props) {
    const {setAuth} = useContext(AuthContext);
    const [values, handleChanges] = useForm({username: '', password: ''});

    function handleSubmit(event) {
        event.preventDefault();

        call_AUTH(values)
            .then((response) => {
                console.log(response);
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('id', response.data.id);
                setAuth({authenticated: true, id: response.data.id});
                props.history.push("/");
            })
            .catch((error) => {
                console.log(`Login error: ${error}`);
            });

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label><input name="username" value={values.username} placeholder="Username" type="text" onChange={handleChanges}/></label>
                <label><input name="password" value={values.password} placeholder="Password" type="password" onChange={handleChanges}/></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(Login);
