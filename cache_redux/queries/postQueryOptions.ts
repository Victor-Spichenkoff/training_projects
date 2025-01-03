import {queryOptions} from "@tanstack/react-query";
import {GetPostFromApiOrThrow} from "@/queries/post";
import {getQueryClient} from "@/libs/Providers";

export const getPostsForPageOptions = (page: number) => {
    return queryOptions({
        queryKey: ['post', page],//parâmetro
        queryFn: () => GetPostFromApiOrThrow(page - 1),
        staleTime: 1_000 * 60,
        refetchOnWindowFocus: false,// não repetir ao trocar de aba
        refetchOnReconnect: false,
        initialData: () => {
            const postsCache = getQueryClient().getQueryData(['post', page])

            if (postsCache)
                return postsCache
        },
        initialDataUpdatedAt: Date.now() + 60 * 1000
    })
}