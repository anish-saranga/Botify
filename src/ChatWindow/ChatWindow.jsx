/* eslint-disable react/prop-types */
import ChatHeader from "./ChatHeader/ChatHeader"
import ChatPanel from "./ChatPanel/ChatPanel"
import ChatInteract from "./ChatInteract/ChatInteract"
import { useState, useEffect, useCallback, useContext } from "react"
import SECRETS from "../secrets"
import { ChatContext } from "../App"

/**
 * ChatWindow component
 * @returns {JSX.Element}
 */
function ChatWindow( { className }) {

  const { bot_greeting } = useContext(ChatContext)
  const [messageField, setMessageField] = useState('') 
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      message: bot_greeting
    }
  ])


  // on every message sent by user
  useEffect(() => {
    if(messageField.trim() === '') return

    // add new user chat bubble
    setChatHistory((chat) => (
      [
      ...chat,
      {
        type: 'user',
        message: messageField
      }, 
      {
        type: 'bot',
        message: "Waiting for response from bot..."
      }
    ]))

    // send message content to bot
    handleUserMessage(messageField)
    }, [messageField])




    // api calls to optalk
    const handleUserMessage = useCallback((userPrompt) => {
        const getResponseFromBot = async (userPrompt) => {
          let requestBody = {
            "request": {
              "message": userPrompt
             },
             "session_id": "",
             "bot_id": SECRETS.BOT_ID,
             "bot_secret": SECRETS.BOT_SECRET
          }

          let response;
          try{
            response = await fetch(SECRETS.CHAT_URL, {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            });

            response = await response.json();
            setChatHistory((chat) => {

              const ActualChat = chat.slice(0, -1)
              return [
              ...ActualChat,
              {
                type: 'bot',
                message: response.data.response
              }
            ]})

        } catch (error){
            console.error("Error in fetching response from bot", error);
        }

        }

        // call the function
        getResponseFromBot(userPrompt)
    });




  return (
    <div className={`h-[500px] w-[350px] rounded-md flex flex-col justify-start p-0 ${className}`}>
      <ChatHeader />
      <ChatPanel chatHistory={chatHistory} />
      <ChatInteract setMessageField={setMessageField}/>
    </div>
  )
}

export default ChatWindow