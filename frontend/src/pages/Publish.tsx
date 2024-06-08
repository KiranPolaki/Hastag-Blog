import axios from "axios";
import { BACKEND_URL } from "../config";
import { Appbar } from "../components/Appbar";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO: make use of the wysiwyg editor
function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center bg-neutral-950	">
        <div className="max-w-screen-lg w-full pt-8">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="title"
          ></input>
          <TextEditor onChange={(e) => setContent(e.target.value)} />
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
    </div>
  );
}
export { Publish };

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        className="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write an article"
      ></input>
    </div>
  );
}

// TODO: Use the notion rich text if possible
// TODO: Lets see how to use the HashNode in my webiset
// TODO: Ability to store the images in R2 or S3
