"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { RegisterDialog } from "./dialogs/register-dialog";

export const Register = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Register</Button>
      <RegisterDialog open={open} setOpen={setOpen} />
    </>
  );
};
