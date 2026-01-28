import { signOut } from "firebase/auth";
import { auth } from "@/app/config/firebase";
export default function LogoutAuth(){
  const logout = async() =>{
    try{
    await signOut(auth)
    if(!auth.currentUser) return
    console.log(auth.currentUser.uid || "hello")
    }
    catch(err){
      console.error(err)
    }
  }
  return(
    <>
    <button onClick={logout} className="relative bottom-0 hover:bg-[rgba(202,138,4,0.4)] xl:text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem] text-[1.2rem] w-full h-auto flex justify-center items-center transition duration-300 ease">
        Logout
    </button>
    </>
  )
}