import React from "react";
import RhfForm from ".//RhfForm";
import ZodRhf from "./ZodRhf";
import { Link } from "react-router-dom";
import Buttons from "../../Components/Button";

export default function RhfApp() {
  return (
    <>
      <ZodRhf /> <br />
      <Link
        target="_blank"
        to="https://youtu.be/cc_xmawJ8Kg?si=kzZFptyResNfKioP"
      >
        Learn More
      </Link>
      <Buttons />
    </>
  );
}
