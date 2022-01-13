import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { userContext } from "../../context/usercontext";
import HomeSignIn from "../home/components/signin";
import ReviseView from "./components/reviseview";

export default function Revise() {
  const { user, loading } = useContext(userContext);
  return loading ? (
    <CircularProgress />
  ) : user ? (
    <ReviseView />
  ) : (
    <HomeSignIn />
  );
}
