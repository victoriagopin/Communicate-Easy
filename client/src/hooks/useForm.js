import { useState } from "react";

export function useForm(initialValues){
    const [values, setValues] = useState(initialValues);

    const changeValues = (e) => {
		setValues(oldValues => ({
			...oldValues,
			[e.target.name] : e.target.value
		}))
	}

    return {
        values,
        changeValues
    }
}