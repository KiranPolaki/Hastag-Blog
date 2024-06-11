// import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
// import { Skelton } from "../components/Skelton";
import { RandomArticle } from "../components/RandomArticle";
import { useBlogs } from "../hooks";
import { Appbar } from "../components/Appbar";

// TODO: Revamp the entire UI after this class and it will be like v0 we saw
// TODO: Lazy loading for blogs, on scroll adding blogs/ pagination
// TODO: Make the app bar look on all the pages
// TODO: on button click login and logon on avatar

function Blogs() {
  const { loading, blogs } = useBlogs();
  // if (loading) {
  //   return (
  //     <div>
  //       <Skelton />
  //       <Skelton />
  //       <Skelton />
  //       <Skelton />
  //       <Skelton />
  //     </div>
  //   );
  // }
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Appbar type="others" />
      <div className="flex justify-center flex-grow py-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] lg:flex-row lg:px-48">
        <div className="hidden lg:block w-full h-full lg:w-1/2 text-white">
          <RandomArticle />
        </div>
        <div className="w-full lg:w-1/2">
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

// TODO: Skelton, loaders, caching the blogs, logout option, toasts alerst
