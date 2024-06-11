import "quill/dist/quill.bubble.css";
import "../styles/publish.css";
// import { useState } from "react";
import ReactQuill from "react-quill";
import { FC, Dispatch, SetStateAction } from "react";

interface TextEditorProps {
  setContent: Dispatch<SetStateAction<string>>;
}

export const TextEditor: FC<TextEditorProps> = ({ setContent }) => {
  //   const [, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleProcedureContentChange = (content: string) => {
    // console.log("content---->", content);
    setContent(content);
  };

  return (
    <div className="h-fit ">
      <ReactQuill
        className="myQuillEditor"
        theme="bubble"
        modules={modules}
        formats={formats}
        placeholder="Content"
        onChange={handleProcedureContentChange}
      ></ReactQuill>
    </div>
  );
};

export default TextEditor;
