/* eslint-disable react/prop-types */
import UserChatBubble from "../../ChatBubbles/UserChatBubble";
import BotChatBubble from "../../ChatBubbles/BotChatBubble";


/**
 * Component to display chat history with bot
 * @param {Object} - chatHistory  
 * @returns {JSX.Element}
 */
function ChatPanel({ chatHistory }) {

  return (
  <>
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

  </>
)
}

export default ChatPanel