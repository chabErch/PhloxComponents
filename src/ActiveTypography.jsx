import React from "react";
import { TextField, Typography } from "@mui/material";

export default function ActiveTypography({ defaultText }) {
  const [isTextFieldOpen, setIsTextFieldOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const textRef = React.useRef("");

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
    return <TextField inputRef={textRef} variant="standard"></TextField>;
  }
  return (
    <Typography onDoubleClick={() => setIsTextFieldOpen(true)}>
      {inputText === "" ? defaultText : inputText}
    </Typography>
  );
}
