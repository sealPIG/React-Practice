import { useState } from "react";

const useValue = () => {
    const [name, setName] = useState(false);

    return {
        name,
        setName
    };
};

export { useValue };