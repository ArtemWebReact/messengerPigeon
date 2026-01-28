import Link from "next/link"
export default function Header(){
    return(
    <header className = "w-full h-[5vw] bg-[rgba(146,64,14,0.6)] flex justify-between items-center text-[2rem] p-10">
        <h1>Simple chat</h1>
        <ul className="flex justify-center items-center gap-10">
            <li><Link href='/data/messages'>Chat</Link></li>
            <li><Link href = '/auth/register'>Register</Link></li>
            <li><Link href = '/auth/login'>Login</Link></li>
        
        </ul>
    </header>
    )
}