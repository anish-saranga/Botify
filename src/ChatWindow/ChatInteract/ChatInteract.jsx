

function ChatInteract( { setMessageField } ) {

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
    <div className="bg-zinc-400 p-1">
      <div className="flex justify-start items-center">
        <div className="text-sm m-1">speech</div>

        <input id="botimoz-input-field" type="text" placeholder="Type a message..." className="w-full p-1 m-1" 
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            sendMessageToChat()
          }
        }}/>

        <button className="bg-blue-500 text-white p-1 m-1"
        onClick={() => sendMessageToChat()}
        >Send</button>
      </div>
    </div>
  )
}

export default ChatInteract