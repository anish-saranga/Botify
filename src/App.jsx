import { useState } from "react"
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatTrigger from "./ChatTrigger/ChatTrigger";
import SECRETS from "./secrets";


function App({ bot_name, bot_avatar, bot_greeting, bot_user_input_placeholder, 
              user_avatar, chat_area_bg, user_dialog_bg, bot_dialog_bg, chat_header_bg, licence,
              host_url, height, width, start_open=false, right_position, bottom_position,
              chat_header_title, trigger_icon_open, trigger_icon_close, trigger_icon_bg }) {

  
  const [open, setOpen] = useState(start_open)
  
  
  
  return (
  <>
    <main className="flex justify-start items-end m-5">
      {
    open &&
      <ChatWindow /> 
  }
      <ChatTrigger open={open} setOpen={setOpen}/>
     
    </main>
  </>
  )
  
}

export default App