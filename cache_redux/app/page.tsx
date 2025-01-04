"use client"

import Image from "next/image";
import {Pagination} from "@/components/template/pagination";
import {Footer} from "@/components/template/footer";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function Home() {
    // const bgColor = useSelector((state: RootState) => state.colors)
    const bgColor = useSelector((state: RootState) => state.colors.value)

    return (
        <div className={`flex flex-col items-center gap-5 h-screen ${bgColor}`}>
            <h1 className={"text-3xl font-extrabold"}>Home</h1>

            <div className={"fixed bottom-0 left-0 w-full"}>
                <Footer/>
            </div>
        </div>
    )
}