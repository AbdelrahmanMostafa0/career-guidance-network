import { useForm } from "react-hook-form";

const StudentSignUp = () => {
  const form = useForm();
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
        <p className="text-lg mb-1">First Name</p>
        <input
          placeholder="First Name"
          name="firstName"
          {...register("firstName", {
            required: {
              value: true,
              message: "please enter your first name",
            },
          })}
          type="text"
          className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
            errors.firstName && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-red-500 mt-1">{errors.firstName?.message}</p>
      </div>
      <div>
        <p className="text-lg mb-1">Last Name</p>
        <input
          placeholder="Last Name"
          name="lastName"
          {...register("lastName", {
            required: {
              value: true,
              message: "please enter your last name",
            },
          })}
          type="text"
          className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
            errors.lastName && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-red-500 mt-1">{errors.lastName?.message}</p>
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
      <div>
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
export default StudentSignUp;
