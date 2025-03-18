import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export default function RhfForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "default@email.com",
      password: "password",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // awaiting the response from the server
      //   throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already in use",
      });
    }
  };

  return (
    <form className="flex flex-col *:my-1" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border rounded"
        {...register("email", {
          //   required: true,
          required: "Email is required",
          //   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          validate: (value) => {
            // value.includes("@"),
            if (!value.includes("@")) {
              return "Email must contain @";
            }
            return true;
          },
        })}
        type="text"
        placeholder="email"
      />
      {errors.email && (
        <div className="self-start text-red-500">{errors.email.message}</div>
      )}
      <input
        className="border rounded"
        {...register("password", {
          //   required: true,
          required: "Password is required",
          //   minLength: 8,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && (
        <div className="self-start text-red-500">{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && (
        <div className="self-start text-red-500">{errors.root.message}</div>
      )}
    </form>
  );
}
