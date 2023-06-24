import { useEffect, useState } from "react"
import io from "socket.io-client"
import {getUser} from "../cabinet/cabinetFunctions";
import {responseHandler} from "../helpers/responseHandler";
import Header from "../header/Header";
import "./ChatForm.css";


const socket = io.connect("https://mark:3000/", {
    transports: ['websocket'],
    withCredentials: true,
    extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:3001'
    }
});

export default function ChatForm() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState([]);

    async function fetchData() {
        const response = await getUser();
        const body = await responseHandler(response)
        setUser(body);
    }

    useEffect(() => {
            fetchData();
    }, [])

    const sendMessage = () => {
        socket.emit("chatMessage", {
            message: message,
            name: user.username
        })
    }

    useEffect(()=>{
        socket.on("chatMessage", data =>{
            setMessages([...messages, data]);
        })
    }, [messages])

    return (
        <div style={{ marginTop: '22px'}} className="chatMain">
            <Header/>
            <div className="chatContent">
                <div className='chat-title'>Чат</div>
                <div
                    className='chat-form'
                    style={{
                        height: '450px',  overflowY:"auto"
                    }}
                >
                    {messages.map((message) => {
                        return (
                            <div>
                                <h4>{message.name}:</h4>
                                <p style={{ overflowWrap: 'break-word', width: '100%' }}>
                                    {message.message}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div style={{ display: 'flex ' }}>
                    <input
                        className='chat-input'
                        placeholder='Написать сообщение...'
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }}
                        maxLength={80}
                        value={message}
                    ></input>
                    <button
                        className='send-button'
                        onClick={() => {
                            sendMessage();
                            setMessage('');
                        }}
                        disabled={message === '' ? true : false}
                    >
                        <svg
                            className='feather-send'
                            xmlns='http://www.w3.org/2000/svg'
                            width='23'
                            height='23'
                            fill='none'
                            stroke='#076aff'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <line x1='22' y1='2' x2='11' y2='13'></line>
                            <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
