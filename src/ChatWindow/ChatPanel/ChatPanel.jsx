import { useEffect, useState, useCallback } from "react";
import SECRETS from "../../secrets";
import UserChatBubble from "../../ChatBubbles/UserChatBubble";

function ChatPanel({ messageField, setMessageField }) {
  const [secretsPresent, setSecretsPresent] = useState(true)
  // all the convo history
  const [chatHistory, setChatHistory] = useState([])


  // check if secrets are passed as intended
  useEffect(() => {
    // if secrets issue, show err
    if(!SECRETS.BOT_ID || !SECRETS.BOT_SECRET) {
      setSecretsPresent(false)
    }
  }, [])


  // set initial message
  useEffect(() => {
    setChatHistory([
      {
        type: 'bot',
        message: 'Hello! How can I help you today?'
      }
    ])
  }, [])


  // on every message sent by user
  useEffect(() => {
    if(messageField.trim() === '') return

    // add new user chat bubble
    setChatHistory([
      ...chatHistory,
      {
        type: 'user',
        message: messageField
      }
    ])

    // send message content to bot
    handleUserMessage(messageField)
    }, [messageField])




    // api calls to optalk
    const handleUserMessage = useCallback((userPrompt) => {
        const getResponseFromBot = async (userPrompt) => {
          console.log("in here 2")
          let requestBody = {
            "request": {
              "message": userPrompt
             },
             "session_id": "",
             "bot_id": SECRETS.BOT_ID,
             "bot_secret": SECRETS.BOT_SECRET
          }

          console.log("in here 3")
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
            // console.log("response", response.data.response)
            setChatHistory([ ...chatHistory, {
              type: 'bot',
              message: response.data.response
            }])


        } catch (error){
            console.log("Error in fetching response from bot", error);
        }

        }

        // call the function
        getResponseFromBot(userPrompt)
    }, [SECRETS.BOT_ID, SECRETS.BOT_SECRET]);




    console.log(chatHistory)

  return (
  <>
  {
    secretsPresent ?
    // show chat panel
    <div className="flex-grow overflow-y-scroll px-1 py-1">
      {
        chatHistory.map((chat, index) => {
          // render chat bubbles
          return (
          <UserChatBubble key={index}
          message={chat.message} />
          )
        })
      }
    </div>


    :

    <div className="flex-grow">
      <h3 className="flex h-full w-full justify-center items-center px-2 text-red-500">Something went wrong! Check with your license provider.</h3>
    </div>

  }
  </>
)
}

export default ChatPanel