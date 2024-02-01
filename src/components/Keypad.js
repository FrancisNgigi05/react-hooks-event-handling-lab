// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange() {
        return (console.log('Entering password...'))
    }

    return (
        <div>
            <input type="password" name="password" onChange={ handleChange } placeholder="password"/>
        </div>
    );
}

export default Keypad;