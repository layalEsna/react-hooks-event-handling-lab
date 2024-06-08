// Code Keypad Component Here
import React from "react";

// function Keypad (){
//     return (
//         <div>
//             <input type="password" onChange={()=> console.log('Entering password...')}/>
//         </div>
//     )
// }

function Keypad() {
    function handleChange() {
        console.log('Entering password...')
    }
    return (
        <form>
            <input type="password" onChange={handleChange} autoComplete="new-password"/>
        </form>
    )
}

export default Keypad;