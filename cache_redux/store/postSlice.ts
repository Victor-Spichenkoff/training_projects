import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Post} from "@/api/data";

interface AddPostsPayload {
    paylaod: {
        id: number
        title: string
        description: string
    }
}


//tipagem do initialState e state
interface PostState {
    value: Post[]
}

// Define the initial state using that type
const initialState: PostState = {
    value: [{
        id: 8,
        title: "Slice 1",
        description: "post 8",
    },    {
        id: 9,
        title: "post 9",
        description: "post 9",
    },    {
        id: 10,
        title: "post 10",
        description: "post 10",
    },]
}

export const postsSlice = createSlice({

    name: 'posts',
    initialState,
    reducers: {
        //definir o que vai vir no paylaod
        addNewPost: (state, action: PayloadAction<Post>) => {
            state.value.push(action.payload)
        },
        removePostById: (state, action: PayloadAction<number>) => {
            state.value.filter(post => post.id !== action.payload)
        },
        editPostById: (state, action: PayloadAction<Post>) => {
            const oldPost = state.value.filter(
                post => post.id !== action.payload.id
            )

            state.value = state.value.map(post=>{
                if(post.id == action.payload.id){
                    return action.payload
                }
                return post
            })
        }
    }
})

export const {addNewPost, removePostById, editPostById} = postsSlice.actions

//ele que usa para configurar
export const postsReducer = postsSlice.reducer