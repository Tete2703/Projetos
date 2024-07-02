import { KeyboardEvent, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import React from "react";



export const NameInput = () => {
    const userCtx = useUser();
    const [nameInput, setNameInput] = useState('');

    const handleKeyUpAction = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
            if (nameInput.trim() !== '' && nameInput !== 'bot') {
                userCtx?.setUser(nameInput.trim());
            }
        }

    }
    return (
        <div className="mt-14">
            <p className="text-xl mb-4 text-black">Qual o seu nome?</p>
            <div className="flex gap-3 text-lg items-center">
                <input 
                type="text"
                className="flex-1 border border-black rounded-md px-4 py-3 text-black bg-white/10 outline-none"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyUp={handleKeyUpAction}
                />
            </div>
        </div>
    )
}