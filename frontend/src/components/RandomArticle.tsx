/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import cyber1 from "../../public/Cyberpunk-2077-Retrothrusters.jpg";
import cyber3 from "../../public/abstract-technology-concept-neon-colors-lines-high-speed-light-motion-trails-with-lighting-effect-on-dark-blue-background-vector.jpg";
import cyber4 from "../../public/Cqi7_faW8AA-MBU.jpg";
import cyber5 from "../../public/89081.jpg";
import { useBlogs } from "../hooks";
import { Skelton } from "./Skelton";

function RandomArticle() {
  const images = [cyber1, cyber3, cyber4, cyber5];
  const [random, setRandom] = useState(0);
  const [randomBlog, setRandomBlog] = useState(0);
  const { blogs, loading } = useBlogs();

  useEffect(() => {
    setRandom(Math.floor(Math.random() * images.length));
    setRandomBlog(Math.floor(Math.random() * blogs.length));
  }, []);

  if (loading) {
    <Skelton />;
  }

  return (
    <div className="w-full h-full flex-col max-w-3xl flex justify-center px-5">
      <div className="w-full h-5/6 py-4">
        <img
          src={images[random]}
          alt=""
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <p className="text-sm font-semibold py-2">
        stories, trends and insights from your friends
      </p>
      {blogs[randomBlog] && (
        <div className="h-2/6 w-full text-3xl tracking-wider font-extrabold">
          {blogs[randomBlog].title}
        </div>
      )}
    </div>
  );
}

export { RandomArticle };
