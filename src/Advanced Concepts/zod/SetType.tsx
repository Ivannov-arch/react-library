import React from "react";
import { z } from "zod";

export default function ZodSetType() {
  const UserSet = z.set(z.number());
  //   const UserMap = z.map(z.string(), z.object({ name: z.number() })); // error
  // contains an array of 'arrays of string and object'

  type UserProps = z.infer<typeof UserSet>;

  const user: UserProps = new Set([1, 2, 1, 2]);
  //   const user: UserProps = new Set([1, 2, 1, 2, "s"]);// error
  console.log(UserSet.safeParse(user));

  return (
    <>
      <div></div>
    </>
  );
}
