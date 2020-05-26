import React from "react";

const Greeting = ({ name }) => {
    const upperCaseName = name.toUpperCase();

    return(
        <h1> Hello { upperCaseName }</h1>
    );
}

export default Greeting;