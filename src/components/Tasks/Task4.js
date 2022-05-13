import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TaskWrapper from "./TaskWrapper";
import Skeleton from "@mui/material/Skeleton";

const Task4 = ({ users }) => {
  const furthest = users ? users.findFurthersUsers() : null;
  return (
    <TaskWrapper id="4">
      <Typography sx={{ color: "text.secondary" }}>
        Finds the two users living furthest away from each other
      </Typography>
      <Paper elevation={1}>
        <Stack
          p={2}
          mt={2}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Box>
            First user:{" "}
            {furthest ? (
              `${furthest.user1.name.firstname} ${furthest.user1.name.lastname}`
            ) : (
              <Skeleton />
            )}
          </Box>
          <Box>
            Second user:{" "}
            {furthest ? (
              `${furthest.user2.name.firstname} ${furthest.user2.name.lastname}`
            ) : (
              <Skeleton />
            )}
          </Box>
          <Typography>
            Distance: {furthest ? furthest.dist : <Skeleton />}
          </Typography>
        </Stack>
      </Paper>
    </TaskWrapper>
  );
};

export default Task4;
