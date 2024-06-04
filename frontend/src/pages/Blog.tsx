import { BlogContent } from "../components/BlogContent";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

// * atomFamilies/Selector familes enable us to implement caching of the blogs somwhere else
function Blog() {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <>loading</>;
  }
  return <BlogContent />;
}

export { Blog };
