import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Hand } from "../../../../assets/lottie";
import { userContext } from "../../../../context/usercontext";
export default function HomeWelcomeBack() {
  const { user, loading } = useContext(userContext);
  const firstName = user.displayName.split(" ")[0];
  console.log(user, loading);
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }} textAlign="justify">
      <IconButton>
        <Hand height={250} />
      </IconButton>
      <Typography variant="h5" component="div">{`Hi ${firstName},`}</Typography>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome Back!
      </Typography>
      <br />
      <Typography variant="h5" component="div" gutterBottom>
        What's your plan today?
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        You can solve problems from a curated list of questions. Or, you can
        revise your previously solved questions to never forget.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom></Typography>
      <br />
      <Box display="flex" justifyContent="space-around">
        <Tooltip title="solve more questions from a curated list">
          <Button href="/dashboard" variant="contained" color="secondary">
            Solve more
          </Button>
        </Tooltip>
        <Tooltip title="Revise what you have already learned">
          <Button href="/revise" variant="contained" color="primary">
            Revise
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
