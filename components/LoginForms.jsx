import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { BiHide } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";

function RegisterForms() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      //...data,
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/overview",
    });

    console.log(result);

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/overview");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold text-3xl text-left">Log into your account</h1>
        <h3 className="pb-6 text-left text-md text-gray-800">
          continue from where you left off
        </h3>
        {error && (
          <h3 className="pb-6 text-left text-md text-gray-800">{error}</h3>
        )}
        <form
          id="form"
          className="animation text-left text-md "
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4">
            <div className="input-group relative">
              {/* <label>Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-input login-inp"
                onChange={handleChange}
              />
              <IoMailOutline className="input-icons" />
            </div>
            <div className="input-group relative">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input login-inp"
                onChange={handleChange}
              />
              <RiLockPasswordLine className="input-icons" />
              <BiHide className="absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
            <div className="flex justify-between text-sm">
              <h1 className=" text-indigo-500 ">Forgot password?</h1>
              <div>
                <form className="flex gap-2">
                  <label for="remember" className="text-grey-700">
                    Remember me
                  </label>
                  <input
                    id="remember"
                    type="checkbox"
                    className="accent-indigo-500"
                  />
                </form>
              </div>
            </div>
            <div className="submit-btn mt-4 flex justify-between items-center">
              <button className="global-btn">Log in</button>
            </div>

            <div className="text-center text-grey-400 text-sm mt-4">
              <h1>
                Don't have an account?
                <Link href="/register">
                  <a>
                    <span className="text-indigo-500">Sign up</span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForms;
