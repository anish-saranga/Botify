import { ChatContext } from "../App"
import { useContext } from "react"


/**
 * botChat bubble
 * @param {Object} message - bot message
 * @returns {JSX.Element}
 */
function BotChatBubble({ message}) {

  const { bot_avatar } = useContext(ChatContext)

  return (
    <div className="flex flex-row justify-start items-start my-1 py-1 px-2">
      {/* avatar */}
      <div className="bg-black rounded-full py-1 px-2 mx-1 w-fit">
      <img src={bot_avatar} alt="bot-avatar" className="w-6 h-7" />
      </div>
      {/* message bubble */}
      <div name="bot-bubble" className="bg-blue-200 rounded-md px-2 py-1 max-w-8/12 w-fit text-left">
  {
    message === "Waiting for response from bot..."
    // show loading animation
      ? (
        <div className="p-2 w-fit">
          <div className="flex space-x-2">
          <div className='w-2 h-2 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-2 w-2 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-2 w-2 bg-blue-900 rounded-full animate-bounce'></div>
          </div>

        </div>
      )
      : (
        <div>{message}</div>
      )
  }
</div>

    </div>
  )
}

export default BotChatBubble