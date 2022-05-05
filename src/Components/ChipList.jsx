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
  items,
  defaultValue = items[0],
  typographyVariant = "body2",
  color = "#b39ddb",
}) {
  const [listValue, setListValue] = React.useState(defaultValue.value);
  const [listLabel, setListLabel] = React.useState(defaultValue.label);
  const [isChipClicked, setIsChipClicked] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={(e) => setIsChipClicked(false)}>
      <Chip
        autoFocus
        icon={
          <Avatar sx={{ background: "#ffffff", width: 24, height: 24 }}>
            {icon === null ? (
              <FolderOutlinedIcon sx={{ width: 16, height: 16 }} />
            ) : (
              icon
            )}
          </Avatar>
        }
        style={{
          height: 32,
          padding: 0.4,
          borderRadius: 16,
          background: color,
        }}
        label={
          isChipClicked ? (
            <Autocomplete
              disableClearable
              defaultValue={listLabel}
              options={items}
              renderInput={(params) => (
                <TextField sx={{ width: 0.9 }} {...params} variant="standard" />
              )}
              sx={{ minWidth: 160 }}
              onInputChange={(event, inputLabel) =>
                items.map(({ value, label }) => {
                  if (label === inputLabel) {
                    setListValue(value);
                    setListLabel(label);
                  }
                  return value;
                })
              }
            />
          ) : (
            <Typography variant={typographyVariant}>{listValue}</Typography>
          )
        }
        onDoubleClick={() => setIsChipClicked(true)}
      />
    </ClickAwayListener>
  );
}
