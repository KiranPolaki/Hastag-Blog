import { Avatar } from "./Avatar";

function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">HastBlog</div>
      <div>
        {/* This is where the recoil comes where we store the name somewher */}
        <Avatar name="harkirat" size={"big"} />
      </div>
    </div>
  );
}

export { Appbar };
