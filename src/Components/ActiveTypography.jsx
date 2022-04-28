import React from "react";
import { TextField, Typography } from "@mui/material";

export default function ActiveTypography({
  defaultText,
  isOpen = false,
  width = 1,
  typographyVariant = "body2",
  textFieldVariant = "standard",
}) {
  const [isTextFieldOpen, setIsTextFieldOpen] = React.useState(isOpen);

  const [inputText, setInputText] = React.useState(defaultText);

  const textRef = React.useRef("");

  //if click not in text field
  React.useEffect(() => {
    const closeTextField = (e) => {
      if (!textRef.current.contains(e.target)) {
        setInputText(textRef.current.value);
        setIsTextFieldOpen(false);
      }
    };
    document.addEventListener("click", closeTextField);
    return () => document.removeEventListener("click", closeTextField);
  }, []);

  if (isTextFieldOpen) {
    return (
      <TextField
        sx={{ width: width }}
        defaultValue={inputText}
        inputRef={textRef}
        variant={textFieldVariant}
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setInputText(textRef.current.value);
            setIsTextFieldOpen(false);
          }
        }}
      ></TextField>
    );
  }
  return (
    <Typography
      variant={typographyVariant}
      onDoubleClick={() => setIsTextFieldOpen(true)}
    >
      {inputText}
    </Typography>
  );
}
