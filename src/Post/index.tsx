import { Ellipsis, MessageSquare, Upload } from "lucide-react";

export function Post({ post }) {
  function handleAcction(action) {}

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition duration-200">
      <div className="flex space-x-3">
        <img
          src={post.avatar}
          alt="Usuário do avatar"
          className="rounded-full w-3 h-3 "
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold">{post.name}</span>
              <span className="text-gray-500 ml-2">@{post.username}</span>
              <span className="text-gray-500 ml-2">{post.time}</span>
            </div>
            <Ellipsis className="text-gray-500" />
          </div>
          <p className="mt-2">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              className="mt-3 rounded-2xl max-w-full h-auto"
              alt="Imagem de conteúdo do usuário."
            />
          )}
          <div className="flex justify-between mt-4 text-gray-500">
            <div className="flex item-center cursor-pointer hover:text-blue-400">
              <MessageSquare onClick={() => handleAction("comment")} />
              <span className="ml-2">0</span>
            </div>
            <div className="flex item-center cursor-pointer hover:text-green-400">
              <MessageSquare onClick={() => handleAction("retweet")} />
              <span className="ml-2">0</span>
            </div>
            <div className="flex item-center cursor-pointer hover:text-red-400">
              <MessageSquare onClick={() => handleAction("like")} />
              <span className="ml-2">0</span>
            </div>
            <div className="flex item-center cursor-pointer hover:text-blue-400">
              <Upload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
