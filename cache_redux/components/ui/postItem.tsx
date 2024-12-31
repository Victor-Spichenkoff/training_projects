import {Post} from "@/api/data";

interface PostItemProps {
    post: Post
}

export const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto border border-gray-200 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 truncate">
                {post.title}
            </h2>
            <p className="text-gray-600 text-base line-clamp-4">
                {post.description}
            </p>
        </div>
    )
}