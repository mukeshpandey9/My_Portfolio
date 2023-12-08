import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [github, setGithub] = useState("");
  const [link, setLink] = useState("");

  const [image, setImage] = useState("");

  // Image uplaod

  const fileUploadHandle = (e) => {
    const file = Array.from(e.target.files);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!title || !description || !link || !gihub || !image) {
      alert("All Fields Are Required!");
      return;
    }

    let formData = new FormData();

    formData.set("title", title);
    formData.set("description", description);

    formData.set("github", price);
    formData.set("link", link);

    formData.set("image", image);

    setImgUrl([]);
    // console.log(imgUrl);

    dispatch(createProject(formData));
  };

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      message.success("Product Created SuccessFully");
      navigate("/admin/products");
    }

    dispatch(resetCreateProject());
  }, [dispatch, error, success]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SideBar />
          <div className="container mt-12 md:mt-2 mx-auto h-full w-full ">
            <h1 className="text-center py-3 text-5xl text-violet-800 ">
              Create Product
            </h1>
            <div className="card w-full  flex items-center  justify-center  h-full ">
              <form className="w-96 max-w-lg flex flex-col py-8 bg-white gap-6">
                <div className="w-full px-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="w-full px-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Description
                  </label>
                  <textarea
                    required
                    className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  leading-tight focus:outline-none min-w-full focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    rows="3"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Product Description..."
                  />
                </div>

                <div className="w-full px-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="price"
                  >
                    Deploy Link
                  </label>
                  <input
                    required="true"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    type="url"
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>

                <div className="w-full px-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="Stock"
                  >
                    Github
                  </label>
                  <input
                    required="true"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="Stock"
                    type="url"
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>

                {/* Image */}

                <div className="flex items-center w-full px-5 flex-col">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      required
                      type="file"
                      name="project"
                      accept="image/"
                      onChange={fileUploadHandle}
                      className="block w-full text-sm text-slate-500
  file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-violet-50 file:text-violet-800
  hover:file:bg-violet-100
"
                    />
                  </label>

                  <div className="flex py-3 w-full gap-6 overflow-x-auto">
                    {image && (
                      <img
                        id="preview_img"
                        className="h-20 w-16 object-cover"
                        src={image}
                        alt="Current profile photo"
                      />
                    )}
                  </div>
                </div>

                <div className="px-4 text-center">
                  <button
                    className="outline-none  text-center p-3 px-4 hover:bg-violet-500 active:bg-violet-500 bg-violet-800 text-white "
                    type="submit"
                    onClick={handleCreateProject}
                  >
                    Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateProject;
