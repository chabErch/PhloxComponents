import * as React from "react";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';

export default function TimeText({
  realHour = 0,
  targetHour = 0,
  TimeType = "astronomical"
}) {

  if (TimeType === "academic")
  {
    realHour = (realHour * 60) / 45 
    realHour = realHour.toFixed(1)
    targetHour = (targetHour * 60) / 45 
    targetHour = targetHour.toFixed(1)
  }

  return (
    <Box sx={{display: "flex", gap: 2 }}>
        <Typography variant="body2" color='gray'>
          {realHour}
        </Typography>
        <Typography variant="body2"color='gray'>
          /
        </Typography>
        <Typography variant="body2">
          {targetHour}
        </Typography>
        <Typography variant="body2" color='gray'>
          ч.
        </Typography>
    </Box>
    );
  }
  