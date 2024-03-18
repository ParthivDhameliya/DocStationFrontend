import { createContext, useState } from 'react';

export const staffContext = createContext();

export const StaffProvider = (props) => {
    const [staff, setStaff] = useState({"data": []});

    return (
        <staffContext.Provider value={[staff, setStaff]}>
            {props.children}
        </staffContext.Provider>
    );
}