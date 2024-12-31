"use server"
import {allPosts, Post} from "@/api/data";
import {Sleep} from "@/utils/sleep";


/*
* page -> 0
* skip == 3
* */


export const GetPostsForPage = async (page: number, sleep: number = 2000) => {
    const skip = 3
    const start = page * skip

    const final = []

    for(let i = start; i < start + skip; i++) {
        final.push(allPosts[i])
    }

    await Sleep(sleep)

    return final
}