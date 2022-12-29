import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  useTitle("Login");
  const [loginError, setLoginError] = useState("");

  // React Hook Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /// Auth Context
  const { login, googleLogin, setUser } = useAuth();

  /// redirect user
  const navigate = useNavigate();
  //user location where they want to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  /// Handle login

  const handleLogin = (data) => {
    setLoginError("");
    const { email, password } = data;
    console.log(data);
    ///Log In with email and password
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //Navigate user to the desired path
        navigate(from, { replace: true });

        toast.success(`Welcome ${user?.displayName}`);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  ///LogIn/sign up with google
  const handleGoogleLogin = () => {
    setLoginError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        //Navigate user to the desired path
        navigate(from, { replace: true });
        toast.success(`Welcome ${user?.displayName}`);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              {/*// Email */}
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
                    required: "Password is required",
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
              <div className="flex items-center justify-between">
                {/* <a
                  href="/"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a> */}
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
              {/* divider */}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <button
                type="submit"
                onClick={handleGoogleLogin}
                className="w-full flex justify-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <FaGoogle />
              </button>
              {loginError && (
                <label className="text-center">
                  <p className="text-rose-500 mt-3">{loginError}</p>
                </label>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
