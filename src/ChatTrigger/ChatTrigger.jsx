import { RiMessage3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";


function ChatTrigger({ open, setOpen}) {
  return (
    <main>
    <div className="bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center"
        onClick={() => setOpen(!open)}>
            <div className="fixed">
            <RiCloseLine color="white" className={`${open ? 'scale-100 size-10' : 'scale-0 size-0'} transition`}/>
            <RiMessage3Line size={40} color="white" className={`${!open ? 'scale-100 size-10' : 'scale-0 size-0'} transition`}/>
            </div>

    </div>
    </main>
  )
}

export default ChatTrigger