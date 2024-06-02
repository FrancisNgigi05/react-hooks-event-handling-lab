// Code Keypad Component Here

function Keypad (){

    const handlingOnchange = () => {
        console.log('Entering password...');
    }

    return (
        <div>
            <input type="password" onChange={handlingOnchange}/>
        </div>
    )
}

export default Keypad;