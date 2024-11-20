/* eslint-disable react/prop-types */
import UserChatBubble from "../../ChatBubbles/UserChatBubble";
import BotChatBubble from "../../ChatBubbles/BotChatBubble";
import { useContext } from "react";
import { ChatContext } from "../../App";

/**
 * Component to display chat history with bot
 * @param {Object} - chatHistory  
 * @returns {JSX.Element}
 */
function ChatPanel({ chatHistory }) {

  const { chat_bg_color } = useContext(ChatContext)

  return (
  <>
  {/* dynamic tailwind classes?? */}
    <div className={`flex-grow overflow-y-scroll scroll-smooth px-1 py-1 border-2 border-blue-500 ${chat_bg_color ? `bg-${chat_bg_color}` :  'bg-white'}`}>
      {
        chatHistory.map((chat, index) => {
          // render chat bubbles
          return (
          chat.type === 'user' ?
          <UserChatBubble key={index}
          message={chat.message} />
          :
          <BotChatBubble key={index} 
          message={chat.message} />
          )
        })
      }
    </div>

  </>
)
}

export default ChatPanel