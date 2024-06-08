import { Quote } from "../components/Quote";
import Auth from "../components/Auth";
import { useState } from "react";

function Signin() {
  const [, setLoading] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-col-2">
        <div>
          <Auth type={"signin"} setLoading={setLoading} />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
}

export { Signin };
