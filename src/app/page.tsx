import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<>
<section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 w-full h-screen flex justify-center items-center flex-col">
  <h1 className="text-[3rem]">Welcome!</h1>
  <h2 className="text-[1.5rem]">You can <Link href="/auth/login" className="text-[red]">login</Link> if you already have an account or <Link href="/auth/login"  className="text-[red]">register</Link> to create one</h2>
  
</section>
</>
  );
}
