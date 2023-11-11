import { useForm } from "react-hook-form";

const CompanySignUp = () => {
  const form = useForm({
    // defaultValues: {
    //   type: "Company",
    // },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-2 gap-6"
    >
      <div>
        <p className="text-lg mb-1">Company Name</p>
        <input
          placeholder="Company Name"
          name="fullName"
          {...register("fullName", {
            required: {
              value: true,
              message: "please enter your Company Name",
            },
          })}
          type="text"
          className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
            errors.lastName && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-red-500 mt-1">{errors.fullName?.message}</p>
      </div>
      <div>
        <p className="text-lg mb-1">Email</p>
        <input
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: " Please enter your email",
            },
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              message: "Please enter a valid email",
            },
          })}
          name="email"
          type="email"
          className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
            errors.email && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-red-500 mt-1">{errors.email?.message}</p>
      </div>
      <div className="col-span-2">
        <p className="text-lg mb-1">Password</p>
        <input
          placeholder="Password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "please enter your password",
            },
          })}
          type="password"
          className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
            errors.password && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-red-500 mt-1">{errors.password?.message}</p>
      </div>
      <button className="col-span-2 rounded-lg px-4 font-bold text-white bg-lighterGreen py-3 active:scale-[0.99] duration-100">
        Sign Up
      </button>
      {/* className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                      formError.LastName &&
                      "border-red-500 focus:border-red-500"
                    }`} */}
    </form>
  );
};
export default CompanySignUp;
