import React from "react";
import { z, ZodSet } from "zod";
import ZodBasic from "./zod";
import ZodObjects from "./ZodObject";
import ZodTuples from "./ZodTuples";
import ZodUnions from "./ZodUnion";
import ZodRecordType from "./RecordType";
import ZodMapType from "./MapType";
import ZodSetType from "./SetType";
import ZodPromiseType from "./PromiseType";
import AdvancedValidation from "./AdvancedValidation";
import HandlingError from "./HandlingZodError";
import { Link } from "react-router-dom";

export default function ZodApp() {
  //#region : we don't need this
  // type User = {
  //     username: string
  // }

  // const user: User = { username: "WDS" }
  //#endregion

  return (
    <>
      <div>
        Zod, <br /> Check console.log()
        <br />{" "}
        <Link
          target="_blank"
          to="https://www.youtube.com/watch?v=L6BE-U3oy80&t=148s"
        >
          Learn Here!
        </Link>
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600"
        >
          Back
        </button>
        <ZodBasicMemo />
        <ZodObjectsMemo />
        <ZodTuplesMemo />
        <ZodUnionsMemo />
        <ZodRecordTypeMemo />
        <ZodMapTypeMemo />
        <ZodSetTypeMemo />
        <ZodPromiseTypeMemo />
        <AdvancedValidationMemo />
        <HandlingErrorMemo />
      </div>
    </>
  );
}

const ZodBasicMemo = React.memo(ZodBasic);
const ZodObjectsMemo = React.memo(ZodObjects);
const ZodTuplesMemo = React.memo(ZodTuples);
const ZodUnionsMemo = React.memo(ZodUnions);
const ZodRecordTypeMemo = React.memo(ZodRecordType);
const ZodMapTypeMemo = React.memo(ZodMapType);
const ZodSetTypeMemo = React.memo(ZodSetType);
const ZodPromiseTypeMemo = React.memo(ZodPromiseType);
const AdvancedValidationMemo = React.memo(AdvancedValidation);
const HandlingErrorMemo = React.memo(HandlingError);
