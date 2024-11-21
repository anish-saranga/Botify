import { RiMicLine } from "react-icons/ri";


function ChatInteract( { setMessageField } ) {

  // handle check message entered + set Message field of parent
  function sendMessageToChat() {
    let message = document.getElementById('botimoz-input-field').value
    message = message.trim()
    if(message.length > 0) {
      setMessageField(message)
    }
    // reset the input field
    document.getElementById('botimoz-input-field').value = ''
  }

  return (
    <div className="bg-blue-500 p-1 rounded-b-md">
      <div className="flex justify-start items-center">
        <div className="text-sm m-1 py-1 px-2 rounded-full hover:bg-blue-400 transition">
        <RiMicLine size={20} className="text-white"/>
        </div>

        <input id="botimoz-input-field" type="text" placeholder="Type a message..." className="w-full p-1 m-1 rounded-full bg-white text-black" 
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            sendMessageToChat()
          }
        }}/>

        <button className="text-white py-1 px-3 m-1 rounded-full hover:bg-blue-400 transition"
        onClick={() => sendMessageToChat()}
        >Send</button>
      </div>
    </div>
  )
}

export default ChatInteract