import React from "react";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export default function HandlingError() {
  const UserSchema = z
    .object({
      username: z.string().min(3, "Min length must be three"),
      coords: z.tuple([z.string(), z.date()]).rest(z.number()),
    })
    .strict();

  type User = z.infer<typeof UserSchema>;

  const user: User = {
    username: "12",
    coords: ["string", new Date(), 4, 4],
  };

  const result = UserSchema.safeParse(user);
  if (!result.success) {
    console.log(fromZodError(result.error));
  }

  return (
    <>
      <div></div>
    </>
  );
}
