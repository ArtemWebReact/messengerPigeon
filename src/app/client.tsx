'use client'
import ChatContext from "./context";
import { useState } from "react";
import { useEffect } from "react";
import "./globals.css";

export default function AddToLayoult(
    {
  children
}: Readonly<{
  children?: React.ReactNode;
}>

){
const [name , setName] = useState('')
return(
    
    <ChatContext.Provider value = {{name, setName}}>
           {children}
    </ChatContext.Provider>
)
}