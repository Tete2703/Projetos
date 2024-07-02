import { useChat } from "@/contexts/ChatContext"
import { useUser } from "@/contexts/UserContext";

export const ChatMessage = () => {
    const chatCtx = useChat();
    const userCtx = useUser();
    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map(item => (
                <div key={item.id} className= {`border border-black rounded-md p-2 text-sm
                ${item.user === userCtx?.user ? 
                'self-end bg-gray-400'  :
                'self-start bg-gray-300'
                }`}>
                    <div className="font-bold">{item.user}</div>
                    <p>{item.text}</p>
                </div>
            ))}

        </div>
    )
}