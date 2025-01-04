import Link from "next/link"

export const Footer = () => {
    return (
        <footer className={'bg-slate-900 text-white/85 py-12 px-24 w-full'}>
            <div className={'flex justify-around'}>
                <Link href="/pagination" className={"hover:text-white"}>Tanstack</Link>
                <Link href={"/config"} className={"hover:text-white"}>Config</Link>
                <Link href={"/post/context"} className={"hover:text-white"}>Posts</Link>
            </div>
        </footer>
    )
}