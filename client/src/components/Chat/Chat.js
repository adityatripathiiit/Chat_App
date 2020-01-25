import React , { useState, useEffect } from 'react';  // Useeffect is a hook that lets us use life cycles method in function component
import querystring from 'query-string'; // retrieving data from url
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;


const Chat = ({ location }) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://chat-socket-trips.herokuapp.com/';

    useEffect(() => {
        const {name,room} = querystring.parse(location.search); //getting the url back
        //   console.log(name,room)
            socket = io(ENDPOINT);

          setName(name);
          setRoom(room);
        // console.log(name,room);  
          socket.emit('join', { name, room },() => {
            // alert(error);
          });


          return () => {
              socket.emit('disconnect');
              socket.off();
          }

    },[ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            // console.log(message);
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }
    // console.log(message, messages)


    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room}></InfoBar>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
                <Messages messages={messages} name={name}></Messages>

            </div>
        </div>
    )
}


export default Chat;