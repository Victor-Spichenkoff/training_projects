export const allPosts: Post[] = [
    {
        id: 1,
        title: "post 1",
        description: "post 1",
    },    {
        id: 2,
        title: "post 2",
        description: "post 2",
    },    {
        id:3,
        title: "post3",
        description: "post3",
    },    {
        id:4,
        title: "post4",
        description: "post4",
    },    {
        id:5,
        title: "post 5",
        description: "post 5",
    },    {
        id: 6,
        title: "post 6",
        description: "post 6",
    },    {
        id: 7,
        title: "post 7",
        description: "post 7",
    },

]


export class PostGlobalData
{
    static useThisId = 11

    public static GetIdForPost(){
        PostGlobalData.useThisId += 1
        return PostGlobalData.useThisId - 1
    }
}

export interface Post {
    id: number
    title: string
    description: string
}