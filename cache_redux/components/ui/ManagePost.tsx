"use client"

import {Post, PostGlobalData} from "@/api/data";
import {PostManageItem} from "@/components/ui/postManageItem";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewPost} from "@/store/postSlice";

export const ManagePost = () => {
    const [isEditing, setEditing] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddButton = () => {
        const id = PostGlobalData.GetIdForPost()

        dispatch(addNewPost({id, title, description}))
        setEditing(false)
        setTitle("")
        setDescription("")
    }

    const posts = useSelector((state: any) => state.posts.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col items-center">
            <h1 className={"text-2xl mb-20"}>Organizar posts</h1>
            <div className='flex flex-col w-full max-w-4xl md:w-1/2'>
                <button
                    onClick={() => setEditing(true)}
                    className={'self-end bg-blue-600 rounded-md w-fit p-2 m-2'}>
                    +
                </button>
                {
                    isEditing && (
                        <div className="flex px-2 py-4 justify-between items-center border-y border-gray-600">
                            <div className={"flex flex-col gap-3 flex-1"}>
                                <input
                                    className={"bg-transparent "} type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder={"Title"}

                                />
                                <input
                                    className={"bg-transparent "}
                                    type="text" value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder={"Description"}
                                />

                            </div>
                            <div>
                                <div className={"flex gap-5"}>

                                    <button
                                        onClick={handleAddButton}
                                        className={"p-2 bg-emerald-500 hover:bg-emerald-700 rounded-md"}>Salvar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {posts.map((post: Post) => (
                    <PostManageItem post={post} key={post.id}/>
                ))}
            </div>
        </div>
    )
}