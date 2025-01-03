import {useEffect, useState} from "react";

interface FreshManagerProps {
    slateTimeSeconds: number
}


export const FreshManager = ({slateTimeSeconds}: FreshManagerProps) => {
    const [remaning, setRemaning] = useState(slateTimeSeconds)

    useEffect(() => {
            const interval = setInterval(()=> {
                setRemaning(old => old-1)
                if(remaning -1 <= 0)
                    clearInterval(interval)
            }, 1000)
    }, [])

    return (
        <div>
            <div className={'flex items-center justify-center text-xl'}>
                {remaning}s
            </div>
            <button>Reset</button>
        </div>
    )
}