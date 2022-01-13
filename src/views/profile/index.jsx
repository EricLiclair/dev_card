import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { userContext } from "../../context/usercontext";
import HomeSignIn from "../home/components/signin";
import ProfileView from "./components/profileview";

export default function Profile() {
  const { user, loading } = useContext(userContext);
  return loading ? (
    <CircularProgress />
  ) : user ? (
    <ProfileView />
  ) : (
    <HomeSignIn />
  );
}
