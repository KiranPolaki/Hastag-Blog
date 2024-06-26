import { SignupInput } from "@saiop/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

// TODO: trpc
// TODO: Divide this into two components cause th etype inference will give problems

export default function Auth({
  type,
  setLoading,
}: {
  type: "signup" | "signin";
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [postInputsSignin, setPostInputsSignin] = useState({
    email: "",
    password: "",
  });
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function sendRequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const data = response.data;
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  async function sendRequestSigin() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputsSignin
      );
      const data = response.data;
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  // if (loading) {
  //   return <>loading...</>;
  // }

  // TODO: Add loading until its redirected to blog
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signup" ? "Create an account" : "Login to account"}
            </div>
            <div className="text-slate-400">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account"}

              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Login" : "Sign up"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type === "signup" ? (
              <LabelInput
                label={"Name"}
                placeholder="SaiKiran..."
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabelInput
              label={"Email"}
              placeholder="SaiKiran@gmail.com"
              onChange={(e) => {
                if (type === "signup") {
                  setPostInputs((c) => ({
                    ...c,
                    email: e.target.value,
                  }));
                } else {
                  setPostInputsSignin((c) => ({
                    ...c,
                    email: e.target.value,
                  }));
                }
              }}
            />
            <LabelInput
              label={"Password"}
              placeholder="Shhh...."
              type={"password"}
              onChange={(e) => {
                if (type === "signup") {
                  setPostInputs((c) => ({
                    ...c,
                    password: e.target.value,
                  }));
                } else {
                  setPostInputsSignin((c) => ({
                    ...c,
                    password: e.target.value,
                  }));
                }
              }}
            />
            <button
              type="button"
              onClick={type === "signup" ? sendRequest : sendRequestSigin}
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabledInputTypes {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ label, placeholder, type, onChange }: LabledInputTypes) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-bold text-black text-semibold pt-4">
          {label}
        </label>
        <input
          type={type || "text"}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
