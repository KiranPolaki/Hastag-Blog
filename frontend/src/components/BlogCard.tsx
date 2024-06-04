import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex">
            <Avatar name={authorName} />
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
              {authorName}
            </div>
            <div className="pl-2 flex justify-center flex-col">&#183;</div>
            <div className="pl-2 font-light text-slate-500 text-sm flex justify-center flex-col">
              {publishedDate}
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
}

export { BlogCard };
