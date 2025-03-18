import React from "react";
import { z } from "zod";

// enum Hobbies {
//   Programming = "programming",
//   Reading = "reading",
//   Selling = "selling",
// }
const hobbies = ["Programming", "Reading", "Selling"] as const;

export default function ZodBasic() {
  const UserSchema = z.object({
    username: z.string().min(3),
    age: z.number().gt(0).default(Math.random()),
    // age: z.bigint(),
    birthday: z.date().optional(),
    // isProgrammer: z.literal(true),
    isProgrammer: z.boolean().default(true),
    // isProgrammer: z.boolean().nullable(), // the value can be null
    // isProgrammer: z.boolean().nullish(), // the value can be null||undefined

    // test: z.undefined()||never()||.null()||void()||any()||unknown()
    // hobby: z.enum(["Programming", "Reading", "Selling"]),
    // hobby: z.nativeEnum(Hobbies),
    hobby: z.enum(hobbies),
  });

  //#region : we don't need this
  // type User = {
  //     username: string
  // }

  // const user: User = { username: "WDS" }
  //#endregion

  type User = z.infer<typeof UserSchema>;
  const user: User = {
    username: "Vann",
    age: 30,
    birthday: new Date(),
    isProgrammer: true,
    hobby: "Programming",
    // hobby: Hobbies.Programming,
  };

  // console.log(UserSchema.parse(user))
  // console.log(UserSchema.safeParse(user));
  return (
    <>
      <div>
        {/* Zod */}
        {/* <script src="/frontend/src/Advanced Concepts/zod/zod.ts"></script> */}
      </div>
    </>
  );
}
