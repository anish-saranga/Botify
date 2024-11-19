import ChatHeader from "./ChatHeader/ChatHeader"
import ChatPanel from "./ChatPanel/ChatPanel"
import ChatInteract from "./ChatInteract/ChatInteract"
import { useState } from "react"


function ChatWindow() {

  const [messageField, setMessageField] = useState('')  

  return (
    <div className="h-[450px] w-[350px] rounded-md border-2 border-black flex flex-col justify-start p-0">
      <ChatHeader />
      <ChatPanel messageField={messageField} setMessageField={setMessageField}/>
      <ChatInteract setMessageField={setMessageField}/>
    </div>
  )
}

export default ChatWindow