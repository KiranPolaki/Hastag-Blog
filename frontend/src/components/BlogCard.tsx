import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
interface BlogCardProps {
  authorName: string;
  title: string;
  publishedDate: string;
  id: number;
}

function BlogCard({ authorName, title, publishedDate, id }: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-full max-w-screen-md cursor-pointer flex justify-center">
        <div className="border-b p-4 w-10/12">
          <div className=" text-xl py-2 text-white font-semibold ">{title}</div>
          <div className="flex">
            <Avatar name={authorName} />
            <div className="font-extralight text-white pl-2 text-sm flex justify-center flex-col">
              {authorName}
            </div>
            <div className="pl-2 text-slate-500 flex justify-center flex-col">
              &#183;
            </div>
            <div className="pl-2 font-light text-slate-500 text-sm flex justify-center flex-col">
              {publishedDate}
            </div>
          </div>
        </div>
        {/* <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(
          content.length / 100
        )} min read`}</div> */}
      </div>
    </Link>
  );
}

export { BlogCard };
