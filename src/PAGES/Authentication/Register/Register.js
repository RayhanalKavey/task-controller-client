import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitle from "../../../HOOKS/useTitle/useTitle";

const Register = () => {
  useTitle("Register");

  const [registerError, setRegisterError] = useState("");
  // React Hook Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //handle register
  const handleRegister = (data) => {
    console.log(data);
    console.log(data.photoURL[0].name);
  };
  console.log(errors);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
              Register !!
            </h1>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="space-y-4 md:space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required !" })}
                  // id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your name"
                />
                {/* erroR message */}
                {errors.name && (
                  <p className="text-rose-500 mt-1"> {errors.name?.message}</p>
                )}
              </div>
              {/* Photo URL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Image
                </label>
                <input
                  type="file"
                  {...register("photoURL", { required: "Image is required !" })}
                  className=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="your image"
                  accept="image"
                />

                {/* erroR message */}
                {errors?.photoURL && (
                  <p className="text-rose-500 mt-1">
                    {" "}
                    {errors.photoURL?.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required !",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {/* Show email erroRs */}
                {errors.email && (
                  <p className="text-rose-500 mt-1" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required !",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character or longer.",
                    },
                    pattern: {
                      value: /(?=.*[A-Z].*[A-Z])(?=.*[!#@$%&? "])/,
                      message:
                        "Please ensure password has two uppercase and one special case letter.",
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* Show password erroRs */}
                {errors.password && (
                  <p className="text-rose-500 mt-1" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              {/* Terms and conditions */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <input
                className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
                value="Register"
              /> */}
              <input
                className="btn btn-primary w-full mt-5 mb-1 text-black dark:text-white border py-2 cursor-pointer rounded-lg"
                type="submit"
                value="Register"
              />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
