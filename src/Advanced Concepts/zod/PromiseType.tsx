import React from "react";
import { z } from "zod";

export default function ZodPromiseType() {
  const PromiseSchema = z.promise(z.string());

  const p = Promise.resolve("this is the result");
  //   const user: UserProps = new Set([1, 2, 1, 2, "s"]);// error
  console.log(PromiseSchema.safeParse(p));

  return (
    <>
      <div></div>
    </>
  );
}
