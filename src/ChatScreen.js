import React,{useState} from 'react'
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
    const [messages,setMessages]=useState([
        {
            name:'Ellen',
            image:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg',
            message:'whats up'
        },
        {
            name:'Ellen',
            image:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg',
            message:'hi '
        },
        {
            
            
            message:'hi how are you Ellen. hope your doing well '
        },
    ])

    return (
        <div classname="chatScreen">
            
            <p className="chatScreen__timestamp"> you matched with ellen</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text"> {message.message}</p>
                    </div>

                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser"> {message.message}</p>

                    </div>
                )
                
            ))}
            
                <form className="chatScreen__input">
                    <input   className="chatScreen__inputField"   type="text" placeholder="type your text" />
                    <button className="chatScreen__inputButton">Send</button>
                    </form>
            
            
        </div>
    )
}

export default ChatScreen
