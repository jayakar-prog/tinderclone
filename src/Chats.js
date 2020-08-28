import React from 'react'
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Mark zukerberg"
            message="hi watsup"
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat 
            name="Ellen"
            message="hi watsup"
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg"
            />
            <Chat 
            name="lex luther"
            message="hi watsup"
            timestamp="50 seconds ago"
            profilePic="..."

            />
            <Chat 
            name="SuperMan"
            message="hi buddy"
            timestamp="90 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
            />
            
        </div>
    )
}

export default Chats
