import { BlogCard } from "../components/BlogCard";

// TODO: Revamp the entire UI after this class and it will be like v0 we saw
// TODO: Lazy loading for blogs, on scroll adding blogs/ pagination
function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          authorName={"sai polaki"}
          title={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket"
          }
          content={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket and here is more things to know about this punk right here you must know"
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"sai polaki"}
          title={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket"
          }
          content={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket and here is more things to know about this punk right here you must know"
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"sai polaki"}
          title={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket"
          }
          content={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket and here is more things to know about this punk right here you must know"
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"sai polaki"}
          title={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket"
          }
          content={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket and here is more things to know about this punk right here you must know"
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"sai polaki"}
          title={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket"
          }
          content={
            "How an asshole like mme is making a blog app without knowing shit at 21 with only $300 in his pocket and here is more things to know about this punk right here you must know"
          }
          publishedDate={"2nd Feb 2024"}
        />
      </div>
    </div>
  );
}

export { Blogs };
