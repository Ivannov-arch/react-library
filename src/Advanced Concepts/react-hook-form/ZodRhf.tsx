import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export default function ZodRhf() {
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
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // awaiting the response from the server
      //   throw new Error();
      console.log(data);
      return data;
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
        {...register("email")}
        type="text"
        placeholder="email"
      />
      {errors.email && (
        <div className="self-start text-red-500">{errors.email.message}</div>
      )}
      <input
        className="border rounded"
        {...register("password")}
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
