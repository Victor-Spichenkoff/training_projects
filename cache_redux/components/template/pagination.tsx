"use client"

import {startTransition, useEffect, useState, useTransition} from "react";
import {Post} from "@/api/data";
import {GetPostsForPage} from "@/api/posts";
import {PostItem} from "@/components/ui/postItem";
import {GetPostFromApi, GetPostFromApiOrThrow} from "@/queries/post";
import {Loading} from "@/components/template/loading";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ErrorHandler} from "@/utils/errorHandler";
import {getPostsForPageOptions} from "@/queries/postQueryOptions";

export const Pagination = () => {
    const [isLoading, startTransition] = useTransition()
    const [page, setPage] = useState(1)
    const [currentPosts, setCurrentPosts] = useState<Post[]>([])


    const getData = async () => {
        const posts = await GetPostFromApi(page - 1)

        if (!posts)
            return null

        setCurrentPosts(posts)
        return posts
    }


    const {isPending, isError, data, error, status, refetch} = useQuery(getPostsForPageOptions(page))


    if (isPending) {
        return (
            <div>
                <Loading/>
            </div>)
    }

    if (isError) {
        return (
            <div>
                <h1>Tanstack error</h1>
                <div>{ErrorHandler(error)}</div>
            </div>)
    }

    return (
        <div className={"flex flex-col gap-3"}>
            {data?.map((post) => (
                <PostItem post={post} key={post.id}/>
            ))}
        </div>
    )
}