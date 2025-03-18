import React from "react";
import { number, z } from "zod";

const hobbies = ["Programming", "Reading", "Selling"] as const;

export default function ZodTuples() {
  const UserSchema = z
    .object({
      username: z.string().min(3),
      //   coords: z.tuple([z.number().gt(3), z.string(), z.date()]),
      coords: z
        .tuple([z.number().gt(3), z.string(), z.date()])
        .rest(z.number()),
    })
    .passthrough();

  type User = z.infer<typeof UserSchema>;

  const user: User = {
    username: "Vann",
    coords: [5, "string", new Date(), 4, 4],
  };

  //   console.log(UserSchema.parse(user)); // partial has been done on top

  return (
    <>
      <div></div>
    </>
  );
}
