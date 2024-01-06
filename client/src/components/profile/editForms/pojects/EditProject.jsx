import { Button } from "@/components/ui/button";
import { editProject, getProjects } from "@/redux/features/user/projectsSlice";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const EditProject = ({ project }) => {
  const [Posted, setPosted] = useState(false);
  const form = useForm({
    defaultValues: {
      name: project.name,
      description: project.description,
      link: project.link,
    },
  });
  const status = useSelector((state) => state.projects.editProject.status);

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const projectId = project.id;
    // console(projectId);
    try {
      await dispatch(editProject({ projectData: data, projectId }));

      dispatch(getProjects());
      if (status === "succeeded") {
        setPosted(true);
      }
    } catch (error) {}
  };
  return !Posted ? (
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
  ) : (
    <div className="min-h-[250px] grid place-content-center">posted</div>
  );
};
export default EditProject;
