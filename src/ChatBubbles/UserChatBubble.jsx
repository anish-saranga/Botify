
function UserChatBubble({ user_avatar, message}) {
  return (
    <div className="flex flex-col justify-center items-end px-1 my-2">
        {/* avatar */}
        <div></div>
        {/* message */}
        <div className="bg-blue-300 flex-grow rounded-md">
            <span className="text-base italic p-2">
                {message}
            </span>
        </div>
    </div>
  )
}

export default UserChatBubble