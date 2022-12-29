import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../CONTEXT/AuthProvider/AuthProvider";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  useTitle("Register");

  const [signUpError, setSignUpError] = useState("");
  // React Hook Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Auth Context
  const { createUser, updateUserProfile, googleLogin, setUser, setReload } =
    useAuth();

  // Redirect user where they want to go
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;

  //handle register
  const handleRegister = (data) => {
    const { name, email, password, photoURL, accountType } = data;
    setSignUpError("");
    const image = photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    // console.log("data", data);
    // console.log("photoURL", photoURL);
    // console.log("photoURL[0]", image);
    /// send image to the dedicated image hosting server imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const photoURL = imgData.data.url;
          ///Create user with email and password starT
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              toast.success(`Welcome ${user?.displayName}`);
              handleUpdateUserProfile(name, photoURL, email, accountType);
            })
            .catch((error) => {
              setSignUpError(error.message);
            });
          // //Create user with email and password enD
        }
      });
  };
  /// Update user profile.
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {
        setReload(true); //reload when successfully signed up to update the photo

        // Navigate user to the desired path
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  /// LogIn/sign up with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);

        //Navigate user to the desired path
        navigate(from, { replace: true });

        toast.success(`Welcome ${user?.displayName}`);
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  ///---------------------------
  console.log("errors", errors);
  //-------------------------------///---------------------------------------///
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
                  accept="image/*"
                />

                {/* erroR message */}
                {errors.photoURL && (
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
              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Register
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/login"
                  className=" font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
              {signUpError && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {signUpError}
                  </span>
                </label>
              )}
              {/* divider */}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              {/* google sign in */}

              <button
                type="submit"
                onClick={handleGoogleLogin}
                // className="flex justify-center w-full text-black dark:text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                className="w-full flex justify-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <FaGoogle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
