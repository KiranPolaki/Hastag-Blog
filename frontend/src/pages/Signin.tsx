import { Quote } from "../components/Quote";
import Auth from "../components/Auth";

function Signin() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-col-2">
        <div>
          <Auth type={"signin"} />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
}

export { Signin };
