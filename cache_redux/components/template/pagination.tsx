"use client"

import {startTransition, useEffect, useState, useTransition} from "react";
import {Post} from "@/api/data";
import {GetPostsForPage} from "@/api/posts";
import {PostItem} from "@/components/ui/postItem";
import {GetPostFromApi, GetPostFromApiOrThrow} from "@/queries/post";
import {Loading} from "@/components/template/loading";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ErrorHandler} from "@/utils/errorHandler";
import {getPostsForPageOptions} from "@/queries/postQueryOptions";
import {getQueryClient} from "@/libs/Providers";

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

    const {isPending, isError, data, error, isSuccess} = useQuery({
        queryKey: ['post', page],//parâmetro
        queryFn: () => GetPostFromApiOrThrow(page - 1),
        staleTime: 1_000 * 60,
        refetchOnWindowFocus: false,// não repetir ao trocar de aba
        refetchOnReconnect: false,
        placeholderData: keepPreviousData
    })
    // const {isPending, isError, data, error, isSuccess} = useQuery(getPostsForPageOptions(page))


    return (
        <div>

            <div className={"flex flex-col gap-3"}>
                {
                    isPending && (
                        <div>
                            <Loading/>
                        </div>)
                }
                {
                    isError && (
                        <div>
                            <h1>Tanstack error</h1>
                            <div>{ErrorHandler(error)}</div>
                        </div>
                    )
                }
                {isSuccess && data?.map((post) => (
                    <PostItem post={post} key={post.id}/>
                ))}
            </div>

            <div>

            </div>

            <div className={'flex gap-3 justify-center mt-10'}>
                {[1, 2, 3, 4].map(pageIndex => (
                    <button
                        onClick={() => {
                            setPage(pageIndex)
                        }}
                        className={`bg-sky-50 text-black p-2 rounded-md hover:bg-sky- ${pageIndex == page && "bg-sky-300"}`}
                        key={pageIndex}
                    >
                        {pageIndex}
                    </button>
                ))}
            </div>
        </div>
    )
}