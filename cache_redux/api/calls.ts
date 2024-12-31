import axios from "axios";
import {Post} from "@/api/data";

export const GetPostFromApi = async (page: number) => {
    const res = await axios(`/api/post?page=${page}`)
    if(res.data)
        return res.data as Post[]

    return null
}