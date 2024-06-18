// Custom Hook that provides information about if user is online or offline. (for this we use online and offline event listeners.)

import { useState, useEffect } from "react";

const useOnlineStatus = () => {


    const [onlineStatus, setOnlineStatus] = useState("true");

    //checking if online:
    //here we use useEffect with empty dependency array as we want to add the event listener once only
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus("False");
        });
        window.addEventListener("online", () => {
            setOnlineStatus("True");
        });
    }, []);

    //return boolean if online yes and if offline then no
    return onlineStatus;
}

export default useOnlineStatus;