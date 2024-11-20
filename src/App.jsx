import { useEffect, useState, createContext } from "react"
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatTrigger from "./ChatTrigger/ChatTrigger";
import SECRETS from "./secrets";

// contxt for chat, to avoid prop drilling
export const ChatContext = createContext()


function App(props) {

  
  const [open, setOpen] = useState(props.start_open || false)
  const [ready, setReady] = useState(false)
  const values = props

  // secrets
  const license = props.license

  console.log("props", props)
  // populate secrets from the props - license
  useEffect(() => {
    const licenseSecretsDecoded = atob(license)
    const splitSecrets = licenseSecretsDecoded.split(';')
    SECRETS.BOT_ID = splitSecrets[0]
    SECRETS.BOT_SECRET = splitSecrets[1]
    SECRETS.SESSION_ID = splitSecrets[2]
    setReady(true)
  }, [])
  

  console.log("opne state", open)

  return (
  <>
  {
    ready && 
    <ChatContext.Provider value={values}>
      <main className="flex justify-start items-end m-5">
        <ChatWindow className={`${open ? 'block' : 'hidden'} mb-12`}
          /> 
        <ChatTrigger open={open} setOpen={setOpen}/>
      </main>
    </ChatContext.Provider>
  }
  </>
  )
  
}

export default App