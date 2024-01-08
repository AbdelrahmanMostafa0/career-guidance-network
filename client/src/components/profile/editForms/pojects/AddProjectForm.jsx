import { Button } from "@/components/ui/button";
import { addProject, getProjects } from "@/redux/features/user/projectsSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddProjectForm = () => {
  const [posted, setPosted] = useState(false);
  const [description, setdescription] = useState("");
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const dispatch = useDispatch();

  const status = useSelector((state) => state.projects.addProject.status);
  const onSubmit = async (data) => {
    try {
      await dispatch(addProject(data));
      dispatch(getProjects());
      reset();
    } catch (error) {}
  };

  return !posted ? (
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
            validate: {
              minLength: (value) =>
                value.length > 70 ||
                "description must be at least 70 charachter",
              maxLength: (value) =>
                value.length < 300 ||
                "description must be less than 300 charachter",
            },
          })}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          type="text"
          className="w-full p-2 h-[150px] focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="description"
        />
        <p className="text-sm text-gray-500 text-end">
          {description.length} / 300
        </p>
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
export default AddProjectForm;
