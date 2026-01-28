'use client'
import { auth, db } from "@/app/config/firebase";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import { useContext } from "react";
import ChatContext from "@/app/context";

import '@/app/globals.css'
export default function AddMessage(){
        
    const contextChat = useContext(ChatContext)
    if(!contextChat) return 
    const {name, setName} = contextChat
    const [message, setMessage] = useState('')
    const [encryptedMessage, setEncryptedMessage] = useState<string>()




    const [user, setUser] = useState('')
    const [id, setId] = useState<string>('')
useEffect(()=>{
    
  //  const uid = localStorage.getItem("uid")
 
    if(!uid) return
        setId(uid)
        }, [])
        
        const currentuid = auth.currentUser?.email + name
    const messageCollection = collection(db, currentuid)
     const userCollection = collection(db, "user")
  //  const messageCollectionUser = query(messageCollection, where('name','==', name))
    const email = auth.currentUser?.email
    const uid = auth.currentUser?.uid
    const newMessage = async() =>{
    try{
      
        console.log(uid)
        const date = new Date()
        const localDate = date.toLocaleTimeString("uk-UA", {
            hour:'2-digit',
            minute:'2-digit'
        })
        const whatNew = Date.now()
  await addDoc(messageCollection, {
    message: message,
    userId:  user,
    senderId: uid,
    email: email,
    date: localDate,
    superDate: date,
    whatNew: whatNew

  })
    }
    catch(err){
        console.error(err)
    }
    }
    return(
        <>
        <div className="w-full h-[10vh] lg:h-[12vh] bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 flex justify-center items-center sticky bottom-0 left-0 gap-5">

            <input className="bg-[#ffebb5] w-[50%] xl:w-[30%] h-[50%] rounded-xl placeholder:text-[1.5rem] md:text-[1.5rem] lg:placeholder:text-[2rem] lg:text-[2rem]" placeholder="message" onChange={(e)=>{
                setMessage(e.target.value)
            }}></input>
            <button onClick={newMessage} className="rounded-xl p-3 bg-amber-700/80 hover:bg-amber-800/90 transition duration-500 ease lg:text-[2rem]">🕊️</button>
        </div>
        </>
    )
}