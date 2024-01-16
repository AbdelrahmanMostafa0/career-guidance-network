import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { applayForJob } from "@/redux/features/user/jobApplaySlice";
import { useState } from "react";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ApplayForm = ({ jobData }) => {
  const [cv, setCv] = useState();
  const [error, setError] = useState();
  const [sended, setSended] = useState(false);

  const handlePostApp = async (e) => {
    e.preventDefault();
    const jobId = jobData.id;
    const formData = new FormData();
    formData.append("cvFile", cv);
    // console.log(formData.getAll());
    console.log(formData.get("cvFile"));
    try {
      const response = await axios.post(
        `http://localhost:8000/application/apply/${jobId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
            // Specify content type as JSON
          },
        }
      );
      setSended(true);
      return response.data;
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
      throw error.response.data;
    }
  };
  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold">applay now</h3>
      {sended ? (
        <div className="flex items-center justify-center min-h-[100px]">
          <CheckCircleIcon className="text-7xl text-lighterGreen" />
        </div>
      ) : (
        <form onSubmit={handlePostApp} noValidate className="space-y-3">
          <div className="space-y-2 flex flex-col">
            <label>upload your cv</label>
            <input
              name="cvFile"
              id="cvFile"
              // {...register("cvFile", {
              //   required: {
              //     value: true,
              //     message: " Required",
              //   },
              // })}
              onChange={(e) => {
                setCv(e.target.files[0]);
              }}
              type="file"
            />
            {error && <p className="text-red-500">{error}</p>}
            {/* {errors.cvFile && (
            <p className="text-red-500"> {errors.cvFile.message}</p>
          )}{" "} */}
          </div>
          <Button className="w-full"> applay</Button>
        </form>
      )}
    </div>
  );
};
export default ApplayForm;
