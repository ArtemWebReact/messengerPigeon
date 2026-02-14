import Image from "next/image";
import Link from "next/link";
import Header from "./basic/Header";
import Footer from "./basic/Footer";
import { medival } from "./fonts/fonts";
import { medival2 } from "./fonts/fonts";
import { medival3 } from "./fonts/fonts";
export default function Home() {
  return (
<>
<Header></Header>
<section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 w-full min-h-screen flex justify-center items-center flex-col">
  <div className="w-full h-full flex justify-around items-center xl:flex-row flex-col">
    <Image src = "/img/pigeon.png" alt = "pigeon" width={1024} height={1536} className="xl:w-[30%]  w-[50%] h-auto rounded m-2"></Image>
    <div className="xl:w-[50%] w-full h-full flex justify-center items-center flex-col xl:gap-4">
  <div className="xl:w-[50%] w-full xl:m-10 m-4">
  <h2 className={`xl:text-[4rem] text-[2.5rem] ${medival.className} text-center`}>Messages flying on wings</h2>
  <h3 className={`xl:text-[1.5rem] text-[1.2rem] ${medival2.className} text-center`}>Messenger Pigeon — a secret chancery in your pocket. We have revived the traditions of medieval mail, adding the magic of instant delivery.</h3>

</div>
<div className="w-full h-[40%] flex justify-center items-center gap-3">
<Link className="w-[30%] xl:w-[20%] p-2 xl:p-5 rounded-xl bg-[rgb(126,85,9)] text-[rgb(253,237,184)] transition duration-1000 ease hover:bg-[rgb(253,237,184)] hover:text-[rgb(126,85,9)] text-center flex justify-center items-center xl:text-[1.5rem] text-[1.2rem]" href="auth/login">Get started</Link>
<Link className="w-[20%] xl:w-[15%] p-2 xl:p-5 rounded-xl bg-[white] text-center flex justify-center transition duration-1000 ease items-center text-[rgb(126,85,9)] hover:text-white hover:bg-[rgb(212,148,29)] xl:text-[1.5rem]  text-[1.2rem]" href="auth/login">Sigh in</Link>
</div>
<div className="h-[2px] w-full bg-[rgba(168,112,7,0.83)] m-3 "></div>
<div className="flex justify-center items-center gap-5 m-3">
  <div className="flex justify-center items-center flex-col">
    <h4 className={`text-[rgb(141,96,13)]  xl:text-[2rem] text-[1.7rem] ${medival3.className} `}>Secure</h4>
    <p className={`text-[rgb(77,52,5)] xl:text-[1.2rem] text-[1rem] ${medival2.className} `}>Encryption of your messages</p>
  </div>
    <div className="flex justify-center items-center flex-col">
    <h4  className={`text-[rgb(141,96,13)]  xl:text-[2rem] text-[1.7rem] ${medival3.className} `}>Fast</h4>
    <p className={`text-[rgb(77,52,5)] xl:text-[1.2rem] text-[1rem] ${medival2.className} `}>The pigeon is fast as hell</p>
  </div>
    <div className="flex justify-center items-center flex-col">
    <h4  className={`text-[rgb(141,96,13)]  xl:text-[2rem] text-[1.7rem] ${medival3.className} `}>Intuitive</h4>
    <p className={`text-[rgb(77,52,5)] xl:text-[1.2rem] text-[1rem] ${medival2.className} `}>Intuitive interface</p>
  </div>
</div>
</div>

</div>
</section>
<Footer></Footer>
</>
  );
}
