import * as React from "react";
import { TextField, Typography, Box } from "@mui/material";

export default function TimeText({
  realHour = 0,
  targetHourState,
  TimeType = "astronomical"
}) {

  if (TimeType === "academic") {
    realHour = (realHour * 60) / 45
    realHour = realHour.toFixed(1)
  }

  const [isTimeFieldOpen, setIsTimeFieldOpen] = React.useState(false);
  const [targetHour, setTargetHour] = React.useState("0");
  const timeRef = React.useRef("")

  React.useEffect(() => {
    const closeTimeField = (e) => {
      if (!timeRef.current.contains(e.target)) {
        setTargetHour(timeRef.current.value);
        setIsTimeFieldOpen(false);
        if (targetHourState !== undefined) {
          targetHourState(targetHour);
        }
      }
    };
    document.addEventListener("click", closeTimeField);
    return () => document.removeEventListener("click", closeTimeField);
  }, []);

  if (isTimeFieldOpen) {
    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography variant="body2" color='gray'>
          {realHour}
        </Typography>
        <Typography variant="body2" color='gray'>
          /
        </Typography>
        <TextField
          sx={{ width: "50px" }}
          defaultValue={targetHour}
          inputRef={timeRef}
          type="number"
          size="small"
          variant="standard"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (timeRef.current.value === ""){setTargetHour("0");}
              else{setTargetHour(timeRef.current.value);}
              setIsTimeFieldOpen(false);
            }
          }}
        />
        <Typography variant="body2" color='gray'>
          ч.
        </Typography>
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography variant="body2" color='gray'>
          {realHour}
        </Typography>
        <Typography variant="body2" color='gray'>
          /
        </Typography>
        <Typography variant="body2" onDoubleClick={() => setIsTimeFieldOpen(true)}>
          {targetHour}
        </Typography>
        <Typography variant="body2" color='gray'>
          ч.
        </Typography>
      </Box>
    );
  }
}
