'use client'
import Link from "next/link"
export default function Header(){
    return(
        
    <header className = "w-full h-[5vw] bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t-4 border-yellow-700 shadow-[0_-4px_10px_rgba(0,0,0,0.8)] flex justify-between items-center text-[2rem] p-10">
             <p className="xl:hidden  flex justify-center items-center text-[2rem] text-white"
               onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "flex"
                    }}>≡</p>
              <div id= "mobileNav" className=" fixed overflow-hidden top-0 left-0 w-full  min-h-screen h-screen max-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black   justify-between items-center  flex-col text-[2rem] p-10"
              style={{
                display: "none"
              }}>
                <button className = "text-[2rem] text-white" onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "none"
                    }}>&times;</button>
                    <ul className="flex justify-center items-center gap-10 text-xl text-yellow-200 flex-col w-full h-full ">
                        <li     
                    onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "none"
                    }}>
                            <Link href='/' 
              
                            className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4"
                            >Home</Link>
                        </li>
            <li  onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "none"
                    }}><Link href='/data/messages' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Chat</Link></li>
            <li  onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "none"
                    }}><Link href = '/auth/register' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Register</Link></li>
            <li  onClick={(e)=>{
                   const mobileNav = document.querySelector("#mobileNav") as HTMLElement
                   mobileNav.style.display = "none"
                    }}><Link href = '/auth/login' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Login</Link></li>
        
        </ul>
        </div>
        <div className="flex justify-center items-center w-auto gap-3">
        <div className="aspect-square w-13 bg-[rgb(126,85,9)] flex justify-center items-center rounded-xl">
        <i className="fas fa-feather text-white text-2xl"></i>
        </div>
        <h1 className="xl:text-[2rem] text-[1.5rem] text-yellow-200">Messenger Pigeon</h1>
           </div>
        <ul className="xl:flex justify-center items-center gap-10 text-xl text-yellow-200 hidden ">
            <li><Link href='/data/messages' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Chat</Link></li>
            <li><Link href = '/auth/register' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Register</Link></li>
            <li><Link href = '/auth/login' className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4">Login</Link></li>
        
        </ul>
 
    </header>
    )
}