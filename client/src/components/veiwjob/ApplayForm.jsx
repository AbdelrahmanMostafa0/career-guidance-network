import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { applayForJob } from "@/redux/features/user/jobApplaySlice";

const ApplayForm = ({ jobData }) => {
  const form = useForm();
  const { register, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data.cvFile[0]);
    const formData = new FormData();
    formData.append("cvFile", cvFile[0]);
    const jobId = jobData.id;
    try {
      await dispatch(applayForJob({ appData: data.cvFile, jobId }));
    } catch (e) {}
  };
  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold">applay now</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
        <div className="space-y-2 flex flex-col">
          <label>upload your cv</label>
          <input
            name="cvFile"
            id="cvFile"
            {...register("cvFile", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            type="file"
          />
          {errors.cvFile && (
            <p className="text-red-500"> {errors.cvFile.message}</p>
          )}{" "}
        </div>
        <Button className="w-full"> applay</Button>
      </form>
    </div>
  );
};
export default ApplayForm;
