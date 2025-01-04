import {Post} from "@/api/data";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editPostById} from "@/store/postSlice";

interface PostManageItem {
    post: Post
}

export const PostManageItem = ({post}: PostManageItem) => {
    const [isEditing, setEditing] = useState(false)
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const dispatch = useDispatch()

    const handleEdit = () => {
        setEditing(true)
    }
    const handleDelete = () => {
    }

    const handleSaveChanges = () => {
        setEditing(false)
        dispatch(editPostById({id: post.id, title, description}))
    }

    if (isEditing) {
        return (
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
                        onClick={handleSaveChanges}
                        className={"p-2 bg-emerald-500 hover:bg-emerald-700 rounded-md"}>Salvar
                    </button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className={"flex px-2 py-4 justify-between items-center border-y border-gray-600"}>
            <div>
                <div>{post.title}</div>
            </div>
            <div className={"flex gap-5"}>
                <button
                    onClick={handleEdit}
                    className={"p-2 bg-emerald-500 hover:bg-emerald-700 rounded-md"}>E
                </button>
                <button
                    onClick={handleDelete}
                    className={"p-2 bg-red-500 hover:bg-red-700 rounded-md"}>D
                </button>
            </div>
        </div>
    )
}