function ChatHeader() {
  return (
    <div className="bg-blue-500 p-1 rounded-t-md">
      <div className="text-white text-2xl px-2 mb-1">Oppie</div>

      <div className="text-xs text-white px-2 flex justify-start items-center">
        powered by <span className="bg-white mx-2 p-[5px] rounded-lg"><img src="https://keenwi.openhit.com/images/optalk/optalk-logo.png" className="w-[70px]"></img></span>
      </div>
    </div>
  )
}

export default ChatHeader