"use client"

import {ConfigColorItem} from "@/components/ui/configColorItem";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setColors} from "@/store/colorsSlice";
import {useRouter} from "next/navigation";

export default function ConfigPage() {
    const dispatch = useDispatch()
    const [choseBgColor, setChoseBgColor] = useState<string>("bg-black")
    const router = useRouter()

    const handleColorSet = (e: any) => {
        dispatch(setColors(choseBgColor))
        router.push("/")
    }

    return (
        <div className={"flex flex-col justify-center items-center h-screen " +" "+ choseBgColor}>
                <div className={"w-fit px-12"}>
                    <ConfigColorItem bgColor={"bg-red-600"} name={"color"} placeholder={"Vermelho"}
                                     setBgColor={setChoseBgColor} current={choseBgColor}/>
                    <ConfigColorItem bgColor={"bg-emerald-500"} name={"color"} placeholder={"Verde"}
                                     setBgColor={setChoseBgColor} current={choseBgColor}/>
                    <ConfigColorItem bgColor={"bg-blue-500"} name={"color"} placeholder={"Azul"}
                                     setBgColor={setChoseBgColor} current={choseBgColor}/>
                    <ConfigColorItem bgColor={"bg-black"} name={"color"} placeholder={"Preto"}
                                     setBgColor={setChoseBgColor} current={choseBgColor}/>
                </div>

            <div>

                <button
                    onClick={(e) => handleColorSet(e)}
                    className={"bg-emerald-700 hover:bg-emerald-900 px-3 py-1 rounded-lg mt-8"}
                >Usar essa</button>
            </div>
        </div>
    )
}