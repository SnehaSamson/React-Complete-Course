import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
        // setIsEditing(isEditing ? false : true);
        
        // Updating state based on old state 
        // - If your new state depends on your previous state value, you should not update the state like below
        // setIsEditing(!isEditing);

        // - Instead, pass a function to your state updating function.
        // - This function will automatically be called by React and will receive the guranteed latest state value. 

        setIsEditing ( (editing) => !editing );
        
    }

    function handleChange(event) { 
        console.log(event);
        setPlayerName(event.target.value);

    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption='Save';
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/* <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> */}
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}