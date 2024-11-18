import { useRef } from "react";

export function PostForm({ onPost }) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleSubmit() {
    if (textAreaRef.current.value) {
      onPost(textAreaRef.current.value);
      textAreaRef.current.value = "";
    }
  }

  return (
    <div className="border-b border-gray-800 p-4">
      <textarea
        className=" w-full bg-transparent text-white text-xl resize-none outline-none "
        placeholder="Qual seu pedido de oração?"
        ref={textAreaRef}
      />
      <div className="flex items-center justify-end">
        <button
          className="bg-gray-600 text-white font-bold px-4 py-2 rounded-full hover:bg-gray-700 transition duration-200"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
