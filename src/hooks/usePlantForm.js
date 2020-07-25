import { useState } from 'react';

export const initialPlant = {
    nickname: '',
    species: '',
    h2oFrequency: '',
};

export const usePlantForm = (plant = initialPlant) => {
    const [values, setValues] = useState(plant);

    const handleChanges = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return [values, handleChanges];
};
