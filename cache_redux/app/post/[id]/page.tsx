"use client"

import {keepPreviousData, useQuery, useQueryClient} from "@tanstack/react-query";
import {GetPostFromApiOrThrow} from "@/queries/post";
import {useSearchParams} from "next/navigation";
import {getQueryClient} from "@/libs/Providers";
import {Post} from "@/api/data";
import {Loading} from "@/components/template/loading";
import {ErrorHandler} from "@/utils/errorHandler";


export default function ShowPostPage() {
    const id = useSearchParams().get("id")
    const queryClient = useQueryClient();

    const {isPending, isError, data, error, isSuccess} = useQuery({
        queryKey: ['post', { id }],//parâmetro
        queryFn: async () => {
            const allPostsData: Post[] | undefined = queryClient.getQueryData(["post"]);

            console.log(allPostsData)

            const postData = allPostsData?.find((p) => p.id === Number(id));

            if (!postData) {
                throw "Post não encontrado no cache!"
            }

            return postData; // Retorna o dado encontrado
        },
        staleTime: 1_000 * 60,
        refetchOnWindowFocus: false,// não repetir ao trocar de aba
        refetchOnReconnect: false,
    })

    if(isPending)
        return <Loading/>


    if(isError)
        return <div>{ErrorHandler(error)}</div>


    return(
        <div className={'flex flex-col items-center justify-center gap-6 w-screen'}>
            <div>
                {data.id}
                </div>
            <div>
                {data.title}
            </div>
            <div>
                {data.description}
            </div>

        </div>
    )
}