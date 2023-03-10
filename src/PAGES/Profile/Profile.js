import React, { useState } from "react";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useTitle from "../../HOOKS/useTitle/useTitle";
import toast from "react-hot-toast";

const Profile = () => {
  useTitle("Update Profile");
  const [updateError, setUpdateError] = useState("");

  // React Hook Form
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  // Auth Context
  const { user, updateUserProfile, setReload } = useAuth();

  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  const handleUpdateUser = (data) => {
    const { name, photoURL } = data;
    setUpdateError("");

    const image = photoURL[0];
    const formData = new FormData();
    formData.append("image", image);

    /// send image to the dedicated image hosting server imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    image !== undefined &&
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const photoURL = imgData.data.url;
            handleUpdateUserProfile(name, photoURL);
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
        setReload(true);
        toast.success("Profile updated successfully");
        reset();
      })
      .catch((error) => {
        setUpdateError(error.message);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-teal-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-teal-800 md:text-2xl dark:text-white ">
              Update Profile !!
            </h1>
            <form
              onSubmit={handleSubmit(handleUpdateUser)}
              className="space-y-4 md:space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-teal-800 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required !" })}
                  // id="email"
                  className="bg-gray-50 border border-gray-300 text-teal-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  placeholder="your name"
                  defaultValue={user?.displayName}
                />
                {/* erroR message */}
                {errors.name && (
                  <p className="text-rose-500 mt-1"> {errors.name?.message}</p>
                )}
              </div>
              {/* Photo URL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-teal-800 dark:text-white">
                  Your Image
                </label>
                <input
                  type="file"
                  {...register("photoURL", { required: "Image is required !" })}
                  className=" block w-full text-sm text-teal-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="your image"
                  accept="image/*"
                  required
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
                  defaultValue={user?.email}
                  readOnly
                />
                {/* Show email erroRs */}
                {errors.email && (
                  <p className="text-rose-500 mt-1" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full dark:text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Update
              </button>

              {updateError && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {updateError}
                  </span>
                </label>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
