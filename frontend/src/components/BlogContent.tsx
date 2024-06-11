import { Blog } from "../hooks";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
import devImage from "../assets/dev.png";
import mediumImage from "../assets/medium.png";

// TODO: return posted date from backend
function BlogContent({ blog }: { blog: Blog }) {
  const htmlString = blog.content || "";
  return (
    <>
      <div className="flex flex-col min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] lg:items-center">
        <div className="lg:relative w-full h-16">
          <div className="lg:absolute left-36 text-slate-300 px-10 pb-10 cursor-pointer w-52">
            <Link
              to="/blogs"
              className="flex flex-row font-bold hover:text-blue-500 tracking-wide text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-32 lg:grid grid-cols-12 px-10 w-full max-w-screen-xl">
          <div className="lg:col-span-8">
            <div className="text-3xl font-extrabold text-white leading-10 tracking-wide font-title-sans">
              {blog.title}
            </div>
            <div className="items-center pr-4 pt-5 flex">
              <Avatar size={"big"} name={blog?.author?.name || "Anonymous"} />
              <span className="text-slate-400 pl-3 text-xl tracking-wider">
                {blog.author.name || "Anonymous"}
              </span>
              <span className="text-slate-400 px-2 text-xl tracking-wider">
                |
              </span>
              <div className="text-slate-400 text-lg">2nd Dec 2023</div>
            </div>
            <div
              className="pt-4 text-white text-lg break-words leading-8"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
          </div>
          <div className="col-span-4">
            <div className="lg:flex text-white font-bold text-3xl tracking-wider">
              SIMILAR BLOGS
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-12 px-10 w-full max-w-screen-xl my-6">
          <div className="lg:col-span-8 border-t-2 border-b-2 text-white py-6 text-2xl font-bold tracking-wider w-full">
            <div className="flex items-center justify-between">
              <div>SHARE THIS POST</div>
              <div className="flex gap-2">
                <button>
                  <img src={devImage} alt="logo" className="w-12 h-12" />
                </button>
                <button>
                  <img src={mediumImage} alt="logo" className="w-12 h-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogContent };

// TODO: add listen to blog option and share your blog to multiple websites option
// TODO: how to get tags
