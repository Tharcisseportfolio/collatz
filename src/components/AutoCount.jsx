import React, { useState, useEffect } from "react";

const Count = ({ starting = 0,texts, speed = 100 }) => {
    const [count, setCount] = useState(starting);

    useEffect(() => {


        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 50) {
                    prevCount + 1; 
                    return prevCount + 1;
                }
                else {
                    
                    prevCount = starting
                    return prevCount + 1;
                }
            });


        }, speed);

        return () => clearInterval(timer); 
    }, [starting,texts, speed]); // Dependencies array

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default Count;