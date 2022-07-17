import { Button, Paper, styled } from "@mui/material";
import { useRef, useState } from "react";

interface ColorPickerProps {
  onChange?: (color: string) => void
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const [color, setColor] = useState("#4A4A4A");
  const refInput = useRef<HTMLInputElement>(null);

  const StyledPaper = styled(Paper)(() => ({
    backgroundColor: color
  }));

  return (
    <Button>
      <StyledPaper sx={{ width: "44px", height: "44px" }} elevation={0} />
      <input type="color" defaultValue={color} ref={refInput} style={{
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: "pointer"
      }}
        onChange={(e) => {
          setColor(e.currentTarget.value);
          onChange && onChange(e.currentTarget.value);
        }}
      />
    </Button>
  )
}
