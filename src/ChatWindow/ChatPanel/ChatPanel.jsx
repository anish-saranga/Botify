import { useEffect, useState } from "react";
import SECRETS from "../../secrets";


function ChatPanel({ messageField }) {
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



  return (
  <>
  {
    secretsPresent ?
    // show chat panel
    <div className="flex-grow overflow-y-scroll px-2 py-1">
      {
        chatHistory.forEach((chat, index) => {
          // render chat bubbles
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