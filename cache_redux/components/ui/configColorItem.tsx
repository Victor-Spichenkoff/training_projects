import tailwindConfig from "@/tailwind.config";

interface ConfigColorItemProps {
    bgColor: string
    name: string
    placeholder: string
    setBgColor: (bgColor: string) => void
    current?: string
}

export const ConfigColorItem = ({current, bgColor, name, placeholder, setBgColor}: ConfigColorItemProps) => {
    return (
        <div className={"flex items-center gap-5 text-2xl justify-between"}>

            <label className={'flex items-center gap-5'} onClick={() => setBgColor(bgColor)}>
                <input type="radio" name={name} id={name} value={bgColor}  className={"size-5"}/> {placeholder}
            </label>
            <div className={`h-9 w-9 ${bgColor} ${current == bgColor && "border-2 border-white"}`}>
            </div>
        </div>
    )
}