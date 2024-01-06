import { useDispatch, useSelector } from "react-redux";
import {
  addCertification,
  editCertification,
  getCertification,
} from "@/redux/features/user/certificationSlice";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EditCertificationForm = ({ certification }) => {
  const form = useForm({
    defaultValues: {
      name: certification.name,
      description: certification.description,
      date: certification.date,
      orgnizationName: certification.orgnizationName,
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const status = useSelector(
    (state) => state.certification.editCertification.status
  );
  const [posted, setPosted] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const certificationId = certification.id;
    try {
      await dispatch(
        editCertification({ certificationData: data, certificationId })
      );
      dispatch(getCertification());
      if (status === "succeeded") {
        setPosted(true);
      }
    } catch (error) {}
  };
  return !posted ? (
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
        <p> Issued at</p>
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
              message: " Please enter when its description ",
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
        {status === "loading" ? "loadding..." : "Edit certification"}
      </Button>
    </form>
  ) : (
    <div className="min-h-[200px] grid place-content-center">
      <CheckCircleIcon className=" text-5xl text-darkBlue" />
    </div>
  );
};
export default EditCertificationForm;
