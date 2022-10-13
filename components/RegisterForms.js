import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"


import { BiHide } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function RegisterForms() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { fullName, email, password, confirmPassword } = data;

    if (
      fullName == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold text-3xl text-left">Create an account</h1>
        <h3 className="pb-6 text-left text-md text-gray-700">
          start tracking every penny today
        </h3>
        {error && (
          <h3 className="pb-6 text-left text-md text-red-700 font-bold">{error}</h3>
        )}
        <form id="form" className="text-left text-md" onSubmit={handleSubmit}>
          <div className="grid gap-4 ">
            <div className="input-group relative">
              {/* <label>First Name</label> */}
              <input
                type="text"
                id="firstName"
                name="fullName"
                value={data.fullName}
                onChange ={handleChange}
                placeholder="Full Name"
                className="form-input login-inp "
              />
              <FaRegUserCircle className="input-icons" />
            </div>
            <div className="input-group relative">
              {/* <label>Email</label> */}
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={data.email}
                onChange ={handleChange}
                className="form-input login-inp"
              />
              <IoMailOutline className="input-icons" />
            </div>
            <div className="input-group relative">
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={data.password}
                onChange ={handleChange}
                className="form-input login-inp "
              />
              <RiLockPasswordLine className="input-icons" />
              <BiHide className="absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
            <div className="input-group relative">
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                value={data.confrimPassword}
                onChange ={handleChange}
                className="form-input login-inp "
              />
              <RiLockPasswordLine className="input-icons" />
              <BiHide className="absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
            <div className="submit-btn mt-5">
              <button className="global-btn">Create account</button>
            </div>
            <div className="text-center text-grey-400 mt-4 ">
              <h1>
                Already have an account?{" "}
                <Link href="/login">
                  <a>
                    <span className="text-indigo-500">sign in</span>
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
