"use client"

import {startTransition, useEffect, useState, useTransition} from "react";
import {Post} from "@/api/data";
import {GetPostsForPage} from "@/api/posts";
import {PostItem} from "@/components/ui/postItem";
import {GetPostFromApi} from "@/api/calls";
import {Loading} from "@/components/template/loading";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const Pagination = () => {
    const [isLoading, startTransition] = useTransition()
    const [page, setPage] = useState(1)
    const [currentPosts, setCurrentPosts] = useState<Post[]>([])

    // useEffect(() => {
    //     startTransition(async () => {
    //         const posts = await GetPostFromApi(page - 1)
    //
    //         if (!posts)
    //             return
    //
    //         setCurrentPosts(posts)
    //     })
    // }, []);


    const getData = async () => {
        const posts = await GetPostFromApi(page - 1)

        if (!posts)
            return null

        setCurrentPosts(posts)
        return posts
    }


    //status se quiser usar pelo enum; status == "error"
    const {isPending, isError, data, error, status} = useQuery({
        queryKey: ['post', page],//parâmetro
        queryFn: () => GetPostFromApi(page -1),
        staleTime: 1_000 * 60,
        refetchOnWindowFocus: false// não repetir ao trocar de aba
    })

    if (isPending) {
        return (
            <div>
                <h1>Tanstack pending</h1>
                <Loading/>
            </div>)
    }

    if (isError) {
        return (
            <div>
                <h1>Tanstack error</h1>
                <div>{error.message}</div>
            </div>)
    }


    if (isLoading) {
        console.log('ooadninad')
        return <Loading/>
    }

    return (
        <div className={"flex flex-col gap-3"}>
            {data?.map((post) => (
                <PostItem post={post} key={post.id}/>
            ))}
        </div>
    )
}