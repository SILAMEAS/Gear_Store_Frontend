import {Stack} from "@mui/material";
import {AntSwitch} from "./AntSwitch.tsx";
import React, {PropsWithChildren} from "react";

interface ISwitchAccess {
  disabled?: boolean;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchWithLabel = ({
  disabled = false,
  checked = false,
  onChange,
    children
}: ISwitchAccess&PropsWithChildren) => {
  return (
    <Stack
      direction={"row"}
      spacing={"10px"}
      alignItems={"center"}
      border={
        checked ?1 : 0
      }
      borderColor={"primary.main"}
      gap={"15px"}
      height={"36px"}
      p={"10px"}
      borderRadius={"5px"}>
      <AntSwitch
        overridecolor={"primary.main"}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
        {children}
    </Stack>
  );
};

export default SwitchWithLabel;
