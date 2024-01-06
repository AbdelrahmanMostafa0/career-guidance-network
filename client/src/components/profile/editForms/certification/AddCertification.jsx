import { useDispatch, useSelector } from "react-redux";
import {
  addCertification,
  getCertification,
} from "@/redux/features/user/certificationSlice";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
const AddCertification = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const status = useSelector(
    (state) => state.certification.addCertification.status
  );

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      await dispatch(addCertification(data));
      dispatch(getCertification());
      reset();
    } catch (error) {}
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 space-y-2"
    >
      <div>
        <p>Certification name</p>
        <input
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: " Please enter the name of Certification",
            },
          })}
          type="text"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <p> Issued from</p>
        <input
          name="orgnizationName"
          {...register("orgnizationName", {
            required: {
              value: true,
              message: " Please enter where its issued from",
            },
          })}
          type="text"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.orgnizationName && (
          <p className="text-red-500">{errors.orgnizationName.message}</p>
        )}
      </div>
      <div>
        <p> Issued from</p>
        <input
          name="date"
          {...register("date", {
            required: {
              value: true,
              message: " Please enter when its issued at",
            },
          })}
          type="date"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      </div>
      {/* <div>
        <p> Certification file</p>
        <input
          name="attachment"
          {...register("attachment", {
            // required: {
            //   value: true,
            //   message: " Please enter when its issued at",
            // },
          })}
          type="file"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.attachment && (
          <p className="text-red-500">{errors.attachment.message}</p>
        )}
      </div> */}
      <div>
        <p> Certification description</p>
        <textarea
          name="description"
          {...register("description", {
            required: {
              value: true,
              message: " Please enter when its issued at",
            },
          })}
          type="file"
          className="w-full p-2 focus:outline-none h-[200px] resize-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <Button disabled={status === "pending"} className="w-full">
        {status === "loading" ? "loadding..." : "Add certification"}
      </Button>
    </form>
  );
};
export default AddCertification;
