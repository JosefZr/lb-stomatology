import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbDental } from "react-icons/tb";
export default function Back() {
    return (
        <Link className="hover:opacity-85 shadow-md  cursor-pointer transition-all h-20 flex justify-start items-center px-10 text-3xl font-semibold" href='/'>
            <IoMdArrowRoundBack className=" h-fit"/>
            <TbDental className=" text-4xl"/>
        </Link>
    );
}
