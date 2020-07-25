import { useState } from 'react';

const initialValue = {
    username: '',
    password: '',
};

export const useForm = () => {
    const [values, setValues] = useState(initialValue);

  const handleChanges = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
  };

  return [values, handleChanges];
};
