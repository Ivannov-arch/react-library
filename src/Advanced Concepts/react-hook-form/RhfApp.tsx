import React from "react";
import RhfForm from ".//RhfForm";
import ZodRhf from "./ZodRhf";
import { Link } from "react-router-dom";

export default function RhfApp() {
  return (
    <>
      <ZodRhf /> <br />
      <Link
        target="_blank"
        to="https://youtu.be/cc_xmawJ8Kg?si=kzZFptyResNfKioP"
      >
        Learn Here
      </Link>
      <button onClick={() => window.history.back()} className="text-indigo-600">
        Back
      </button>
    </>
  );
}
