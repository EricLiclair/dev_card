import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { userContext } from "../../../../context/usercontext";

export default function ProfileView() {
  const { user } = useContext(userContext);
  const firstName = user.displayName.split(" ")[0];
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Typography variant="h2" component="div" gutterBottom>
          Soon!
        </Typography>
        <Typography variant="h5" component="div">
          Hey 👋🏻,{" "}
          {firstName[0].toUpperCase() + firstName.substr(1).toLowerCase()}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          A complete dynamic shareable profile display is coming soon.
        </Typography>
        <br />
        <Typography variant="h5" component="div">
          What's in it?
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          A graphical display of your data.
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="body1" component="div" gutterBottom>
          Share <strong>Dev Card</strong> among your friends, compare your
          profiles and compete in a sporting manner. 🚀
        </Typography>
        <br />
      </Paper>
    </Box>
  );
}
