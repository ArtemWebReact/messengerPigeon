import Link from "next/link";
export default function Footer(){
 return(
    <>
    <footer className="w-full h-[10vh] bg-[rgba(146,64,14,0.6)] flex justify-center items-center">

        <ul className="flex justify-center items-center gap-10">
            <li><Link href='/data/messages'>Chat</Link></li>
            <li><Link href = '/auth/register'>Register</Link></li>
            <li><Link href = '/auth/login'>Login</Link></li>
        
        </ul>
    </footer>
    </>
 )
}