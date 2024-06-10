import { TextEditor } from "../components/TextEditor";
import { Appbar } from "../components/Appbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import autosize from "autosize";

export function PublishRichText() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    autosize(document.querySelector("textarea"));
  }, []);
  return (
    <div className="bg-black w-screen h-screen">
      <Appbar />
      <div className=" bg-black">
        <div className="w-full px-52 mt-2">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            className="px-2 block border-none w-full h-20 text-6xl text-white rounded-lg bg-black resize-none  font-semibold  focus:outline-none font-title-sans"
            placeholder="title"
          ></textarea>
        </div>
        <div className="text-white px-52 w-full h-fit">
          <TextEditor />
        </div>
        <button
          type="button"
          onClick={async () => {
            const res = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content,
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            navigate(`/blog/${res.data.id}`);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Submit post
        </button>
      </div>
    </div>
  );
}

// title
// poster
// content
