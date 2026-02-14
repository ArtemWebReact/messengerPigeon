import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[14vh] bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t-4 border-yellow-700 shadow-[0_-4px_10px_rgba(0,0,0,0.8)] flex justify-center items-center font-[MedievalSharp]">
      <ul className="flex justify-center items-center gap-16 xl:text-xl  text-[1rem] text-yellow-200 tracking-widest text-center">
        <li>
          <Link
            href="/data/messages"
            className="hover:text-red-500 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4 text-center"
          >
            ⚜ Chat ⚜
          </Link>
        </li>
        <li>
          <Link
            href="/auth/register"
            className="hover:text-green-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4"
          >
            ✦ Get Started ✦
          </Link>
        </li>
        <li>
          <Link
            href="/auth/login"
            className="hover:text-blue-400 transition duration-300 hover:underline decoration-yellow-600 underline-offset-4"
          >
            ✠ Sign In ✠
          </Link>
        </li>
      </ul>
    </footer>
  );
}
