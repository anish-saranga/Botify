import { ChatContext } from "../App"
import { useContext } from "react"


/**
 * userChat bubble
 * @param {Object} message - user message
 * @returns {JSX.Element}
 */
function UserChatBubble({ message}) {

  const { user_avatar } = useContext(ChatContext)

  return (
    <div className="flex flex-row justify-end items-start my-1 py-1 px-2">
      {/* message bubble */}
      <div name="user-bubble" className="bg-blue-100 rounded-md px-2 py-1 max-w-2/3 text-right text-sm">
        {
          message
        }
      </div>
      {/* avatar */}
      <img src={user_avatar} alt="user-avatar" className="w-8 h-8 rounded-full mx-2" />
    </div>
  )
}

export default UserChatBubble