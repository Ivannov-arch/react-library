import { z } from "zod";

export default function AdvancedValidation() {
  const brandEmail = z
    .string()
    .email()
    .refine((val) => val.endsWith("@everlasts.net"), {
      message: "Email must ends with @everlasts.net",
    });

  const email = "hello@everlasts.net";

  console.log(brandEmail.safeParse(email));

  return (
    <>
      <div></div>
    </>
  );
}
