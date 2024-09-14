import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Back() {
    return (
        <Link className="hover:opacity-85 shadow-md cursor-pointer transition-all h-20 flex justify-start items-center px-10 text-3xl font-semibold" href='/'>
            <IoMdArrowRoundBack className=" h-fit"/>
            <h1 >Back</h1>
        </Link>
    );
}
