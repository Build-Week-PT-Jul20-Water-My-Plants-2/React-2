import {useState} from 'react';

export const useForm = (initialState, activeState = false) => {
    let state = (activeState ? activeState : initialState);

    const [values, setValues] = useState(state);

    const handleChanges = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const clearForm = () => {
        setValues(state);
    }

    return [values, handleChanges, clearForm];
};
