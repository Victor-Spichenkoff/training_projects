//"/api/post"

import {GetPostsForPage} from "@/api/posts";

export async function GET(request: any) {
    const page = request.query || 0

    const posts = await GetPostsForPage(Number(page))

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    })
}