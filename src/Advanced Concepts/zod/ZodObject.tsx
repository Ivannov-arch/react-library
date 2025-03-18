import React from "react";
import { z } from "zod";

const hobbies = ["Programming", "Reading", "Selling"] as const;

export default function ZodObjects() {
  const UserSchema = z
    .object({
      username: z.string().min(3),
      age: z.number().gt(0).default(Math.random()),
      birthday: z.date().optional(),
      isProgrammer: z.boolean().default(true),
      hobby: z.enum(hobbies),
      friends: z.array(z.string()).nonempty(),
    })
    // .partial();
    // .deepPartial();
    // .pick({ username: true, age: true })
    // .omit({ birthday: true }); // remove the props
    // .extend({ name: z.string().optional() })
    // .merge(z.object({ merge: z.string().optional() }))
    .passthrough();

  type User = z.infer<typeof UserSchema>;

  UserSchema.shape.age;
  UserSchema.shape.friends.element;

  const user: User = {
    username: "Vann",
    age: 30,
    birthday: new Date(),
    isProgrammer: true,
    hobby: "Programming",
    // name: "Ivannov",
    // merge: "merge",
    tes: "Kyle", // .passthrough()
    friends: ["Aes", "Johan"],
  };

  //   console.log(UserSchema.shape);
  //   console.log(UserSchema.shape.age);
  //   console.log(UserSchema.partial().parse(user)); // makes all props optional, try to remove the props
  // console.log(UserSchema.parse(user)); // partial has been done on top

  return (
    <>
      <div></div>
    </>
  );
}
