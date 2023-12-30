import { Button } from "@/components/ui/button";
import { addProject, getProjects } from "@/redux/features/user/projectsSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddProjectForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(addProject(data));
      dispatch(getProjects());
    } catch (error) {}
  };
  const status = useSelector((state) => state.projects.addProject.status);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 space-y-2"
    >
      <div>
        <p className={!!errors.name && "text-red-500"}>Poject name</p>
        <input
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: " Please enter the name",
            },
          })}
          type="text"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Title"
        />
        <p className="text-red-500 mt-1">{errors.name?.message}</p>
      </div>
      <div>
        <p className={!!errors.link && "text-red-500"}>Poject Link</p>
        <input
          name="link"
          {...register("link", {
            required: {
              value: true,
              message: " Please enter the link",
            },
          })}
          type="text"
          className="w-full p-2  focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Link"
        />
        <p className="text-red-500 mt-1">{errors.link?.message}</p>
      </div>
      <div>
        <p className={!!errors.description && "text-red-500"}>
          Poject description
        </p>
        <textarea
          name="description"
          {...register("description", {
            required: {
              value: true,
              message: " Please enter the description",
            },
          })}
          type="text"
          className="w-full p-2 h-[150px] focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="description"
        />
        <p className="text-red-500 mt-1">{errors.description?.message}</p>
      </div>

      <Button disabled={status === "pending"} className="w-full">
        {status === "loading" ? "loadding..." : "Add Project"}
      </Button>
    </form>
  );
};
export default AddProjectForm;
