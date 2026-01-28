'use client'
import { createContext } from "react"
interface contextType{
    name:string;
    setName:React.Dispatch<React.SetStateAction<string>>
}
const ChatContext = createContext<contextType| null>(null)
export default ChatContext