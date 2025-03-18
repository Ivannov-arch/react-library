import React from "react";
import { z } from "zod";

export default function ZodMapType() {
  const UserMap = z.map(z.string(), z.object({ name: z.string() }));
  //   const UserMap = z.map(z.string(), z.object({ name: z.number() })); // error
  // contains an array of 'arrays of string and object'

  type UserProps = z.infer<typeof UserMap>;

  const user: UserProps = new Map([
    ["id-john", { name: "John" }], // ["string", { name: "string" }]
    ["id-kyle", { name: "Kyle" }],
  ]);
  console.log(UserMap.safeParse(user));

  return (
    <>
      <div></div>
    </>
  );
}
