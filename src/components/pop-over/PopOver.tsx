import {Stack} from "@mui/material";
import Popover from "@mui/material/Popover";
import {styled} from "@mui/material/styles";
import React from "react";
import {PopoverProps} from "@mui/material/Popover/Popover";
import Text from "../Text/Text.tsx";
import {typePopOver} from "./Type.ts";

const StyledPopover = styled(Popover)(() => ({
  "& .MuiPopover-paper": {
    boxShadow: "0px 0px 11.2208px rgba(0, 0, 0, 0.1)", // customizing shadow with theme object
  },
}));

function PopOver({
  open,
  onClick,
  onClose,
  contain,
  button,
  vertical = "bottom",
  horizontal = "right",
  verticalT = "top",
  horizontalT = "right",
  ...props
}: Readonly<typePopOver> & Omit<PopoverProps, "open">) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const isControl = typeof open === "boolean";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement>,
    reason: "backdropClick" | "escapeKeyDown",
  ) => {
    setAnchorEl(null);
    if (typeof onClose === "function") {
      onClose(event, reason);
    }
  };

  React.useEffect(() => {
    if (isControl && !open) {
      setAnchorEl(null);
    }
  }, [open]);

  let controlOpen = Boolean(anchorEl);

  if (isControl) {
    controlOpen = open && controlOpen;
  }

  const id = () => {
    if (controlOpen) {
      return "simple-popover";
    } else {
      return undefined;
    }
  };

  return (
    <Stack>
      <Text onClick={handleClick} >
        {button}
      </Text>
      <StyledPopover
        id={id()}
        open={controlOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical,
          horizontal,
        }}
        transformOrigin={{
          vertical: verticalT,
          horizontal: horizontalT,
        }}
        {...props}>
        {contain}
      </StyledPopover>
    </Stack>
  );
}

export default PopOver;
