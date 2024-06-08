import { Quote } from "../components/Quote";
import Auth from "../components/Auth";
import { useState } from "react";
function Signup() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signup"} setLoading={setLoading} />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
}

export { Signup };
