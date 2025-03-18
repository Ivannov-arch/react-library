import React from "react";
import { z } from "zod";

const hobbies = ["Programming", "Reading", "Selling"] as const;

export default function ZodRecordType() {
  const UserRecord = z.record(z.string(), z.number());
  // all the props should have a 'string as a key' and 'number as a value'

  type UserProps = z.infer<typeof UserRecord>;

  const user: UserProps = {
    nddndkd: 1,
    ndjnffn: 2,
  };
  //   console.log(UserRecord.safeParse(user));
  return (
    <>
      <div></div>
    </>
  );
}
