'use client'
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { provider } from "@/app/config/firebase";
import { auth } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import './login.css'
export default function LoginAuth(){ 
    const routeReg = useRouter()
    const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
  
    const login = async() =>{
        try{
      
await signInWithEmailAndPassword(auth, email, password)
   const uid = auth.currentUser?.email
    if(!uid) return 
localStorage.setItem("uid", uid)
routeReg.push('/data/messages')
console.log(localStorage.getItem("uid"))
        }
        catch(err){
            console.error(err)
        }
    }
    const loginWithGoogle = async()=>{
 try{

    await signInWithPopup(auth, provider)
       const uid = auth.currentUser?.email
if(!uid) return 
localStorage.setItem("uid", uid)
routeReg.push('/data/messages')
console.log(localStorage.getItem("uid") || 'hello')
 }
 catch(err){
 console.error(err)

 }
    }
    return(
        <>
               <section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 w-full h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center items-center min-h-[80%] h-auto xl:w-[40%] w-[90%] flex-col bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200  gap-4 rounded-xl border-2 border-[rgb(194,146,117)]">
            <h1 className="text-amber-950 xl:text-[2.5rem] text-[2rem] md:text-[2.5rem] lg:text-[3.5rem]">Login</h1>
            <h2 className="text-[rgb(168,132,109)] xl:text-[1.2rem] md:text-[1.6rem] text-[1rem] lg:text-[2rem]">Sign in in your account</h2>
            <div className="bg-amber-50/80  h-[60%] w-full flex justify-center items-center gap-5 flex-col p-5 border-2 border-[rgb(194,146,117)]">
            <p className="text-[1.4rem] xl:text-[2rem] md:text-[1.7rem] lg:text-[3rem]">Email</p>
            <input placeholder="email"  className="flex justify-center items-center text-center  leading-[50px] md:max-h-[100px] lg:h-[25%] max-h-[50px] xl:placeholder:text-[2rem] md:placeholder:text-[2rem] md:text-[2.5rem] xl:h-[10%] md:h-[10%] bg-transparent lg:placeholder:text-[3rem] lg:text-[3rem] xl:text-[2rem] w-[80%] xl:w-[50%] h-[20%] rounded placeholder:text-[1.5rem] transition duration-200 ease" style = {
                {
                    border: "2px solid rgba(146,64,14,0.6)",
                    outline:"none"
                }
             } onFocus = {
                (e)=>{
                    e.target.style.border = "2px solid rgba(226, 186, 112, 0.6)"
                }
             } 
             onBlur={(e)=>{
e.target.style.border = "2px solid rgba(146,64,14,0.6)"
             }} onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
<p className="text-[1.4rem] md:text-[1.7rem] lg:text-[3rem] xl:text-[2rem]">Password</p>
             <input placeholder="password" className="flex justify-center items-center text-center md:max-h-[100px] lg:h-[25%] leading-[50px] xl:placeholder:text-[2rem] md:placeholder:text-[2rem] md:text-[2.5rem] xl:h-[10%] md:h-[10%] bg-transparent lg:placeholder:text-[3rem] lg:text-[3rem] xl:text-[2rem] w-[80%] xl:w-[50%] h-[20%] max-h-[50px] rounded placeholder:text-[1.5rem] transition duration-200 ease" style = {
                {
                    border: "2px solid rgba(146,64,14,0.6)",
                    outline:"none"
                }
             } onFocus = {
                (e)=>{
                    e.target.style.border = "2px solid rgba(226, 186, 112, 0.6)"
                }
             } 
             onBlur={(e)=>{
e.target.style.border = "2px solid rgba(146,64,14,0.6)"
             }}  type = "password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
        
            </div>
             <button onClick={login} className="bg-[rgb(250,228,215)]  xl:text-[2rem] lg:text-[2.5rem] text-[rgb(146,65,14)] border-2 border-[rgb(146,65,14)] transition duration-200 ease hover:bg-[rgb(146,65,14)] hover:text-[rgb(250,228,215)] p-2 md:text-[2rem] text-[1.2rem] rounded flex justify-center items-center">Sign in</button>
             <p className="text-[1rem] xl:text-[2rem] md:text-[1.5rem] text-[rgb(146,65,14)]">
                Or
             </p>
             <button className="text-[1.2rem] xl:text-[2rem] md:text-[2rem] lg:text-[2.5rem] text-[rgb(146,65,14)] m-3 hover:text-[rgb(255,255,255)] transition duration-300" onClick={loginWithGoogle}>Sign in with Google</button>

             </div>
        </section>

        {/*
        <section className="gradientLogin w-full h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center items-center h-[60%] w-[40%] flex-col bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200  gap-4 rounded-xl border-2 border-[rgb(194,146,117)]">
            <h1 className="text-amber-950 text-[2.5rem]">Login</h1>
            <h2 className="text-[rgb(168,132,109)] text-[1.2rem]">Sign in in your account</h2>
            <div className="bg-amber-50/80  h-[60%] w-full flex justify-center items-center gap-5 flex-col p-5 border-2 border-[rgb(194,146,117)]">
            <p className="text-[1.4rem]">Email</p>
            <input placeholder="email" className="bg-transparent w-[50%] xl:w-[50%] h-[20%] rounded placeholder:text-[1.5rem] transition duration-200 ease" style = {
                {
                    border: "2px solid rgba(146,64,14,0.6)",
                    outline:"none"
                }
             } onFocus = {
                (e)=>{
                    e.target.style.border = "2px solid rgba(226, 186, 112, 0.6)"
                }
             } 
             onBlur={(e)=>{
e.target.style.border = "2px solid rgba(146,64,14,0.6)"
             }} onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
<p className="text-[1.4rem]">Password</p>
             <input placeholder="password" className="bg-transparent w-[50%] xl:w-[50%] h-[20%] rounded placeholder:text-[1.5rem] transition duration-200 ease" style = {
                {
                    border: "2px solid rgba(146,64,14,0.6)",
                    outline:"none"
                }
             } onFocus = {
                (e)=>{
                    e.target.style.border = "2px solid rgba(226, 186, 112, 0.6)"
                }
             } 
             onBlur={(e)=>{
e.target.style.border = "2px solid rgba(146,64,14,0.6)"
             }}  type = "password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>

            </div>
             <button onClick={login} className="bg-[rgb(250,228,215)] text-[rgb(146,65,14)] border-2 border-[rgb(146,65,14)] transition duration-200 ease hover:bg-[rgb(146,65,14)] hover:text-[rgb(250,228,215)] p-2 text-[1.5rem] rounded flex justify-center items-center">Sign in</button>
             <p className="text-[1.5rem] text-[rgb(146,65,14)]">
                Or
             </p>
             <button className="text-[1.5rem] text-[rgb(146,65,14)] m-3 hover:text-[rgb(255,255,255)] transition duration-300" onClick={loginWithGoogle}>Sign in with Google</button>

             </div>
        </section>
        */}
        </>
    )
}