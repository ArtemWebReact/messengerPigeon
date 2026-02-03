'use client'
import { auth, db } from "@/app/config/firebase";
import { addDoc, collection, getDoc, getDocs, onSnapshot, query,  QuerySnapshot,  updateDoc,  where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { doc } from "firebase/firestore";
import { useContext } from "react";
import AddMessage from "./write";
import ChatContext from "@/app/context";
import { deleteDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import '@/app/globals.css'
import LogoutAuth from "@/app/auth/logout/logout";
export default function getMessages(){

    
    const contextChat = useContext(ChatContext)
    if(!contextChat) return 
    const {name, setName} = contextChat
      const [theUser, setTheUser] = useState<object[]>([{}])
    const [lastMessage, setLastMessage] = useState('')
    const [nickname, setNickname] = useState('')
    const [chat, setChat] = useState('')
     const [search, setSearch] = useState('')
     const [id, setId] = useState<string>('')
     const [decyptedMessage, setDecryptedMessage] = useState<string>('')
     const [show, setShow] = useState<string>('none')
     const [uemail, setUEmeil] = useState<string>("")
     const [uidState , setUidState] = useState<string>("")
    // const uid = auth.currentUser?.uid


    const pathname = usePathname()
  /* useEffect(()=>{
    const u = localStorage.getItem('uid')
    if(!u) return
     setUEmeil(u)

   },[])*/
   

  
       // const messageCollectionUser = query(messageCollection, where('email','==', name))
    const [message, setMessage] = useState<object[]>([])
    const [users, setUsers] = useState<object[]>([])
    const [receiverState, setReceiverState] = useState<object[]>([])
       const [senderMessage, setSenderMessage] = useState<object[]>([])
       const [newMessage, setNewMessage] = useState('')
       const [sumMessage, setSumMessage] = useState<object[]>([])
    const [allData, setAllData] = useState<object[]>([{}])
    const deleteMessage = async(id:string) =>{
        try{
            const savedUid = localStorage.getItem("uid")
            await deleteDoc(doc(db, ((auth.currentUser?.email || savedUid) + name), id))
            console.log("Done")
        }
        catch(err){
            console.error(err)
        }
    }
        const deleteMessage2 = async(id:string) =>{
        try{
            const savedUid = localStorage.getItem("uid")
            await deleteDoc(doc(db, (name + (auth.currentUser?.email || savedUid)), id))
            console.log("Done")
        }
        catch(err){
            console.error(err)
        }
    }
    const updateMessage = async(id:string)=>{
        try{
            const savedUid = localStorage.getItem("uid")
        await updateDoc(doc(db, ((auth.currentUser?.email || savedUid) + name), id),{
        message:newMessage
        })
        }
        catch(err){

        }
    }
        const updateMessage2 = async(id:string)=>{
        try{
            const savedUid = localStorage.getItem("uid")
        await updateDoc(doc(db, (name + (auth.currentUser?.email || savedUid)), id),{
        message:newMessage
        })
        }
        catch(err){

        }
    }
    const addContact = async(contact: object) => {
        try{
            const savedUid = localStorage.getItem("uid")
       await addDoc(collection(db, `contacts ${auth.currentUser?.email || savedUid}`), contact)
        }
        catch(err){
            console.error(err)
        }
    }
   const deleteContact = async(id:string) =>{
    try{
        const savedUid = localStorage.getItem("uid")
        if(!auth.currentUser) return
        const contactCollection = collection(db, `contacts ${auth.currentUser.email|| savedUid}`)
await deleteDoc(doc(contactCollection, id))
    }
    catch(err){
    console.log(err)
    }
   }

   // Decription of messages -----------------------------------------------------------
   const dectyptMessage = async() => {
   const key = localStorage.getItem('key')
   if(!key) return
      const ivFirst = localStorage.getItem('iv')
      if(!ivFirst) return
      const iv = JSON.parse(ivFirst)
   setDecryptedMessage(
    String(
        crypto.subtle.decrypt(
        {name:"AES-GCM", iv},
        JSON.parse(key),
        )
    )
   )
   }
   const getContact = async() => {
        try{
            const savedUid = localStorage.getItem("uid")
        const contacts = await getDocs(collection(db, `contacts ${(auth.currentUser?.email || savedUid)}`))
       // console.log(contacts || "Pidor")
        setTheUser([{
                email:"notes",
                name:"notes"
            }, ...contacts.docs.map((doc)=>{
            return(
                {
            ...doc.data(),
            id: doc.id
                }
            )
        })])
        }
        catch(err){
            console.error(err)
        }
    }
   
   // Decription of messages -----------------------------------------------------------
useEffect(()=>{
    setName("notes")
    setNickname("notes")
}, [])
useEffect(() => {
    const savedUid = localStorage.getItem("uid")
         const currentuid = (auth.currentUser?.email || savedUid) + name
     const currentReceiver =  name + (auth.currentUser?.email || savedUid) 
     console.log(currentuid)
     console.log(currentReceiver)
     // Перевіряємо, чи дані існують перед створенням collection
     if (!currentuid || !currentReceiver) return;
     
              const messageCollection = collection(db, currentuid)
            const messageReceiver = collection(db, currentReceiver)
            const usersCollection = collection(db, "users")
     const intoDatabase = async() =>{
        try{
         //   console.log(localStorage.getItem("uid"))
        const messages = await getDocs(messageCollection)
        const users = await getDocs(usersCollection)
        const receiverMessage = await getDocs(messageReceiver)
       const readyMessages = messages.docs.map((doc)=>{
        return (
            {
                ...doc.data(),
                id: doc.id
            }
        )
       })

       const readyReceiverMessage = receiverMessage.docs.map((doc)=>{
        return (
            {
                ...doc.data(),
                id: doc.id
            }
        )
       })
       const allMessagesObj = [...readyMessages , ...readyReceiverMessage].sort((a, b)=>a.whatNew-b.whatNew)
       const allMessages = allMessagesObj.map((el)=>{
        return(el.message)
       })
       const lengthMessage = allMessages.length -1
      // console.log(allMessages[lengthMessage])
       setLastMessage(allMessages[lengthMessage])
      /*  console.log(
            messages.docs.map((doc)=>(
         {
            ...doc.data(),
            id: doc.id,
         }
            
        )
        ))
        */

       setMessage(messages.docs.map((doc)=>(
         {
            ...doc.data(),
            id: doc.id
         }
            
        ))
        )
        setUsers(users.docs.map((doc)=>(
            {
                ...doc.data(),
                id:doc.id
            }
        )))
         setReceiverState(receiverMessage.docs.map((doc)=>(
         {
            ...doc.data(),
            id: doc.id
         }
        )
        ))
        }
        catch(err){
            console.error(err)
        }
    }

  if ((!auth.currentUser?.email && !savedUid) || !name) return;

  const currentuid1 = (auth.currentUser?.email || savedUid) + name;
  const messageCollection1 = collection(db, currentuid1);
const currentReceiver1 =  name + (auth.currentUser?.email || savedUid)
 const messageReceiver1 = collection(db, currentReceiver1)
 const contactCollection1 = collection(db, `contacts ${(auth.currentUser?.email || savedUid)}`) 
  const unsubscribe = onSnapshot(messageCollection1, (snapshot) => {

    intoDatabase(); 
    getContact();     
  });
const unsubscribe2 = onSnapshot(messageReceiver1, (snapshot) => {
   
    intoDatabase(); 
    getContact();     
  });
  const unsubscribe3 = onSnapshot(contactCollection1, (snapshot)=>{
    intoDatabase(); 
    getContact();     
  })
return () => {
    unsubscribe();
    unsubscribe2();
    unsubscribe3()
};
}, [name, auth.currentUser?.email, uidState]); 
useEffect(()=>{
    const savedUid = localStorage.getItem("uid")
    if(!savedUid) return
    setUidState(savedUid)
},
[])
return(
    <>
    <section className="flex justify-center items-start">

        <div className="w-[50%] xl:w-[15%] fixed xl:sticky top-0 left-0 h-screen xl:flex max-h-screen min-h-screen gradient  justify-start items-start flex-col z-50 " style = {{
            display:"flex"
        }} id="contacts">
            <button className= "xl:hidden text-[1.5rem] md:text-[2rem] lg:text-[3rem]" onClick={()=>{
            const contacts = document.querySelector('#contacts') as HTMLElement
            const find = users.find((el)=>(el["name"] == search))
            
           contacts.style.display = 'none' 
                }}>&times;</button>
                <div className=" h-full">
                   
{/*Find user---------------------------------------------------------*/}
                <div className="m-2 flex justify-center items-center gap-4 ">
                <input placeholder="name" className="bg-[#ffebb5]  h-auto min-h-[3rem] md:min-h-[5rem] xl:min-h-[2rem] xl:placeholder:text-[1.5rem] xl:text-[1.5rem]  w-[90%]  md:placeholder:text-[2rem] md:text-[2rem] lg:placeholder:text-[2rem] lg:text-[2rem] rounded-xl p-2 placeholder:text-[1.5rem]" onChange = {(e)=>{
                    setSearch(e.target.value)
                }}></input>
                <button 
                className="text-[1.5rem]"
                onClick={
                    (e)=>{
   const find = users.find((el)=>(el["name"] == search))
   if(!find) return
   addContact(find)

                    }
                }>+</button>
                </div>
                
                {/*Find user---------------------------------------------------------*/}
                         {
                
            theUser.map((el, index)=>(
                <div key = {el["id"] + el["email"] + el["name"]} className="hover:bg-[#ffe6a1] h-auto w-full p-4 rounded-xl transition ease-in-out duration-800 text-amber-950 flex justify-center items-center"  onClick={(e)=>{
                setName(el["email"])
                setNickname(el['name'])
                const contacts = document.querySelector('#contacts') as HTMLElement
                if(window.innerWidth < 1280){
                contacts.style.display = 'none'
                }
              
                console.log(pathname)
                }}>
             <div className="w-full h-auto flex justify-center items-center gap-4">
                <p className="break-all text-[1rem] text-[1rem] md:text-[2rem] xl:text-[1.5rem] text-amber-950">{el.name}</p>
                <button className = "text-[1.5rem]" onClick={(e)=>{
            deleteContact(el.id)
                }}>&times;</button>
                </div>
        
             
         
                </div>
                
            ))
            }
             
                </div>
                   <Link href="/auth/login" className="relative bottom-0 hover:bg-[rgba(202,138,4,0.4)] w-full h-auto flex justify-center items-center transition duration-300 ease">
                <button className="xl:text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem] text-[1.2rem]">Login</button>
                </Link>
                <Link href="/auth/register" className="relative bottom-0 hover:bg-[rgba(202,138,4,0.4)] w-full h-auto flex justify-center items-center transition duration-300 ease">
                <button className="xl:text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem] text-[1.2rem]" >Register</button>
                </Link>
                <LogoutAuth></LogoutAuth>
</div>
        <div className="flex flex-col justify-center items-center w-full w-auto min-h-screen h-auto gradient2 gap-4 ">
            <div className="w-full h-[10%] flex justify-center items-center sticky z-40 top-0 left-0 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 gap-4">
                <button className="xl:hidden text-[1.5rem] md:text-[2rem] xl:text-[1.5rem] text-amber-950" onClick={()=>{
            const contacts = document.querySelector('#contacts') as HTMLElement
           contacts.style.display == 'none' ? contacts.style.display ='flex' : contacts.style.display ='none'
                }}>≡</button>
                <div className="flex justify-center items-center flex-col">
                <span className="text-[1rem] md:text-[2rem] xl:text-[1.5rem] text-amber-950">
                    Private chat
                </span>
                 <h2 className="text-[1rem] md:text-[2rem] xl:text-[1.5rem] text-amber-950">{nickname}</h2>
                 </div>
                 </div>
                 <div className="h-full min-h-screen w-full max-w-full overflow-hidden ">
        {[...message, ...receiverState].sort((a, b)=>a.whatNew-b.whatNew).map((el, index)=>{

            return(
            
            <div key={el["senderId"] + el["superDate"] + index} onContextMenu={(e)=>{
                e.preventDefault()
                const message = document.querySelector(`#menu${index}`) as HTMLElement 
                if(!message) return 
            message.style.display == 'none' ? message.style.display = 'flex': message.style.display = 'none'
            }} style = {{
                justifyContent:  auth.currentUser?.uid == el.senderId ? 'end' : 'start',
                alignItems: auth.currentUser?.uid == el.senderId ? 'end' : 'start',

            }} className="flex flex-col  whitespace-normal text-amber-950 h-auto w-full  flex  gap-1 flex-col m-5">
            <div style = {{
                background: auth.currentUser?.uid == el.senderId ? 'rgba(248, 224, 128, 0.8)' : 'rgba(254,249,195,0.8)',
                border:auth.currentUser?.uid == el.senderId ? '2px solid rgba(202, 138, 4, 0.4)' : '2px solid rgba(202, 138, 4, 0.4)',
                marginLeft:auth.currentUser?.uid == el.senderId ? '0' : '5%',
                marginRight:auth.currentUser?.uid == el.senderId ? '10%' : '0'
            }} className="h-auto  flex text-amber-950 justify-start items-center flex-col  rounded-xl">
                
            <p className="text-[1rem] md:text-[1.5rem] xl:text-[1.5rem] lg:text-[2rem] text-amber-950 p-3 whitespace-normal">{el.message}</p>
                    <p className="text-[1rem] md:text-[1.2rem] xl:text-[1rem] text-amber-950 p-3 whitespace-normal">{el.date}</p>

               {/*Context menu----------------------------------------------------------*/}
            <div className="justify-center items-center gap-4" id={`menu${index}`} style={{
                display: show
            }}>
            <button onClick={()=>{
                deleteMessage(el.id)
            }}>&times;</button>
            <button onClick={()=>{
                const html = document.querySelectorAll<HTMLElement>(`.mark${index}`)
                if(!html) return
                html.forEach((el)=>{el.style.display=='flex'? el.style.display ="none":el.style.display ="flex"})
            }
                }>✏️</button>
                </div>
                {/*Context menu----------------------------------------------------------*/}

            <input className = {`mark${index}`}  style={
                {
                    display:'none'
                }
            }
            onChange = {(e)=>{
                setNewMessage(e.target.value)
            }}></input>
            <button onClick={()=>{
                updateMessage(el.id)
                 const html = document.querySelectorAll<HTMLElement>('.mark')
                if(!html) return
                html.forEach((el)=>{el.style.display='flex'})
            }} className = {` mark${index}`} style={
                {
                    display:'none'
                }
            }>update</button>
            </div>
      
            {/*<p>{el.date}</p>*/}
           </div>
           
            
            )
})}</div>

        <AddMessage></AddMessage>

        </div>
      
    

    </section>

    </>
)
}