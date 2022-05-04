import * as React from "react";
import {Typography} from "@mui/material";

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
    <React.Fragment >
        <Typography variant="body2">
          {realHour} / {targetHour} ч.
        </Typography>
    </React.Fragment>
    );
  }
  