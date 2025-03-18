import React from "react";
import { data } from "react-router-dom";
import { number, z } from "zod";

const hobbies = ["Programming", "Reading", "Selling"] as const;

export default function ZodUnions() {
  const UserSchema = z
    .object({
      //   id: z.union([z.string(), z.number()]),
      // id: z.string().or(z.number()),
      id: z.discriminatedUnion("status", [
        z.object({ status: z.literal("success"), data: z.string() }),
        z.object({ status: z.literal("error"), data: z.instanceof(Error) }),
      ]),
    })
    .strict();

  type User = z.infer<typeof UserSchema>;

  const user: User = {
    // id: 2, // okay
    // id: "user", // okay
    // id: new Date() // error

    // id: { status: "success", data: "blablabla" },
    id: { status: "error", data: Error("this is an error") },
  };

  //   console.log(UserSchema.parse(user));
  // console.log(UserSchema.safeParse(user));
  return (
    <>
      <div></div>
    </>
  );
}
