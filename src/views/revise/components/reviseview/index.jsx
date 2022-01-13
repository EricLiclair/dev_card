import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ReviseView() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h5" component="div">
        Under update
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Here's how the older version looked
      </Typography>
      {/* <iframe
        style={{ border: "none" }}
        src=""
        width="100%"
        height={400}
        allow="autoplay"
      ></iframe> */}

      <iframe
        width="100%"
        height="658"
        src="https://www.youtube.com/embed/A7cg8zu7HTw"
        title="Dev Card | Revise Feature"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <br />
    </Box>
  );
}
