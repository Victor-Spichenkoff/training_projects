import Image from "next/image";
import {Pagination} from "@/components/template/pagination";

export default function Home() {
  return (
    <div className={'flex justify-center flex-col items-center gap-5'}>
        <h1 className={"text-3xl font-extrabold"}>Home</h1>
        <div>
            <Pagination />
        </div>
    </div>
  )
}