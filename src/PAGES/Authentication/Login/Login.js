import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import Button from "../../../COMPONENTS/Button/Button";

const Login = () => {
  useTitle("Login");
  const [loginError, setLoginError] = useState("");

  // React Hook Form
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  /// Auth Context
  const { login, googleLogin, setUser, user } = useAuth();
  /// redirect user
  const navigate = useNavigate();
  //user location where they want to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Reset Pass
  // const handleReset = () => {
  //   console.log("Click", user?.email);
  //   // resetPassword(user?.email)
  //   //   .then(() => {
  //   //     toast.success("Reset link has been sent, please check email");
  //   //   })
  //   //   .catch((error) => setLoginError(error.message));
  // };

  /// Handle login

  const handleLogin = (data) => {
    setLoginError("");
    const { email, password } = data;

    ///Log In with email and password
    login(email, password)
      .then((result) => {
        const user = result.user;

        // // If user don't verify email, do not navigate user
        // if (user?.emailVerified) {
        //   reset();
        //   toast.success(`Welcome to your Task Controller`);
        //   //Navigate user to the desired path
        //   navigate(from, { replace: true });
        // } else {
        //   reset();
        //   toast.error(`Please verify your email!!`);
        // }

        // If user  verify email deactivated
        reset();
        toast.success(`Welcome to your Task Controller`);
        //Navigate user to the desired path
        navigate(from, { replace: true });
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
    <section className="bg-gray-50 dark:bg-teal-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-teal-800 md:text-2xl dark:text-white">
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
                  className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required !",
                  })}
                  className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
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
                  className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
                {/* Show password erroRs */}
                {errors.password && (
                  <p className="text-rose-500 mt-1" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                {/* <button
                  onClick={handleReset}
                  className="text-sm font-medium  hover:underline text-gray-500 dark:text-gray-400"
                >
                  Forgot password?
                </button> */}
              </div>
              {/* Submit */}

              <Button CClass="w-full" Type="submit">
                Login
              </Button>
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
              <Button
                CClass="w-full flex justify-center"
                clickHandler={handleGoogleLogin}
              >
                {" "}
                <FaGoogle />
              </Button>

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
