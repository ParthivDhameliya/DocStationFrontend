import { createContext, useState } from 'react';

export const patientContext = createContext();

export const PatientProvider = (props) => {
    const [patients, setPatients] = useState({"data": []});

    return (
        <patientContext.Provider value={[patients, setPatients]}>
            {props.children}
        </patientContext.Provider>
    );
}