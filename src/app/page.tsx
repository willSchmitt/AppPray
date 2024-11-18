"use client";

import { Post } from "@/Post";
import { Navbar } from "./components/Navbar";
import { PostForm } from "./components/PostForm";
import { v4 } from "uuid";
import { getAvatar, getRandomImage } from "../utils/generateImages";
import { useState, useEffect } from "react";

interface PostProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  image: string | null;
  likes: number;
  retweets: number;
  comments: number;
}

export default function HomePage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const addNewPost = (content: string, includeImage = false) => {
    const newPost = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="flex flex-col mx-auto">
      <Navbar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl mx-auto h-screen w-full">
        <header className="sticky top-0 z-10 bg-opacity-80">
          <h2 className="px-4 py-3 text-xl font-bold">Para você</h2>
        </header>

        <PostForm
          onPost={(content: string) => addNewPost(content, Math.random() > 0.6)}
        />
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="bg-blue500 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

{
  /* <div>
<div className="min-h-screen text-gray-100 flex flex-col ">
  <main className="flex-grow flex flex-col gap-16">
    <section
      id="nav"
      className="flex items-center justify-center bg-blue500"
    >
      <Navbar />
    </section>

    <section className="flex-grow border-l border-r border-gray-700 mx-auto">
      <header className="sticky top-0 z-10 bg-slate-400 bg-opacity-80">
        <h2 className="px-4 py-3 text-xl font-bold">Para você</h2>
      </header>
    </section>
  </main>


</div>
</div> */
}
