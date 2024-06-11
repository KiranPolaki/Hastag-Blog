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
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      autosize(textarea);
    }
  }, []);

  useEffect(() => {
    if (title !== "" && content !== "") {
      setDisable(false);
    }
  }, [title, content]);

  return (
    <div className="w-screen min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Appbar type="publish" />
      <div className="px-8 lg:px-52">
        <div className={`mb-6 pl-2 `}>
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
            className={`mt-1 px-3 text-lg bg-blue-600 font-medium text-white focus:outline-none flex items-center rounded-full hover:bg-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100 ${
              disable ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            publish
          </button>
        </div>
        <div className="w-full mt-2">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            onFocus={(e) => (e.target.placeholder = "Title")}
            onBlur={(e) => (e.target.placeholder = "Tell your story?")}
            className=" text-3xl h-12 px-3 block border-none w-full lg:text-6xl lg:h-20 text-white rounded-lg resize-none font-semibold focus:outline-none bg-transparent font-title-sans"
            placeholder="Tell your story?"
          ></textarea>
        </div>
        <div className="text-white w-full">
          <TextEditor setContent={setContent} />
        </div>
      </div>
    </div>
  );
}

// title
// poster
// content

// TODO: Show toast until it is posted
