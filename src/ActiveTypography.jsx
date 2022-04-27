import React from "react";
import { TextField, Typography } from "@mui/material";


export default function ActiveTypography(){
    const [isTextFieldOpen, setIsTextFieldOpen] = React.useState(false)
    const textRef = React.useRef("")

    React.useEffect(() => {
        const openTextField = (e) => {
            if(!textRef.current.contains(e.target)) {setIsTextFieldOpen(false);
            alert(1)}
        };
        const closeTextField = (e) => {
            if(!textRef.current.contains(e.target)) {setIsTextFieldOpen(false);
            alert(2)}
        };
        document.addEventListener('click', closeTextField);
        document.addEventListener('dblclick', openTextField);
        return () => document.removeEventListener('click', closeTextField);
        return () => document.removeEventListener('dblclick', openTextField);
      }, []);

    if(isTextFieldOpen){
        return <TextField inputRef={textRef} variant="standard"></TextField>
    }
    return <Typography>{textRef.current === "" ? "default text" : textRef.current}</Typography>
    
}