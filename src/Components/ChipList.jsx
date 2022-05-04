import React from "react";
import Chip from "@mui/material/Chip";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Avatar from "@mui/material/Avatar";
import {
  ClickAwayListener,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

export default function ChipList({
  icon = null,
  params = [
    { value: "ПЗ", label: "Практическое занятие" },
    { value: "Л", label: "Лекция" },
    { value: "ЛР", label: "Лабораторная работа" },
  ],
  defaultValue = params[0],
  typographyVariant = "body2",
}) {
  const [listValue, setListValue] = React.useState(defaultValue.value);
  const [listLabel, setListLabel] = React.useState(defaultValue.label);
  const [isChipClick, setIsChipClick] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={(e) => setIsChipClick(false)}>
      <Chip
        icon={
          icon === null ? (
            <Avatar sx={{ background: "#ffffff" }}>
              <FolderOutlinedIcon />
            </Avatar>
          ) : (
            <Avatar sx={{ background: "#ffffff" }}>icon</Avatar>
          )
        }
        sx={{ height: 1, padding: 1, borderRadius: 16 }}
        label={
          isChipClick ? (
            <Autocomplete
              disableClearable
              defaultValue={listLabel}
              options={params}
              renderInput={(params) => (
                <TextField sx={{ width: 0.9 }} {...params} variant="standard" />
              )}
              sx={{ minWidth: 240 }}
              onInputChange={(event, inputLabel) =>
                params.map(({ value, label }) => {
                  if (label === inputLabel) {
                    setListValue(value);
                    setListLabel(label);
                  }
                })
              }
            />
          ) : (
            <Typography variant={typographyVariant}>{listValue}</Typography>
          )
        }
        onClick={() => setIsChipClick(true)}
        style={{ background: "#b39ddb" }}
      />
    </ClickAwayListener>
  );
}
