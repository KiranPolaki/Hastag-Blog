import { Appbar } from "../components/Appbar";
import { BlogContent } from "../components/BlogContent";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

// * atomFamilies/Selector familes enable us to implement caching of the blogs somwhere else
function Blog() {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  console.log(blog);

  if (loading) {
    return <>loading</>;
  }
  return (
    <div className="bg-black">
      <Appbar type="others" />
      <BlogContent blog={blog} />
    </div>
  );
}

export { Blog };
