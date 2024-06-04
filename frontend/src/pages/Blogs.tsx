import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

// TODO: Revamp the entire UI after this class and it will be like v0 we saw
// TODO: Lazy loading for blogs, on scroll adding blogs/ pagination
// TODO: Make the app bar look on all the pages
// TODO: on button click login and logon on avatar

function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div> loading </div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => {
            return (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Blogs };
