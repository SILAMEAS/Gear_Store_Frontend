import React, {MouseEventHandler, ReactNode} from "react";

export interface typePopOver {
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  open?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: (
    event: React.MouseEvent<HTMLButtonElement>,
    reason: "backdropClick" | "escapeKeyDown",
  ) => void;
  active?: boolean;
  contain: ReactNode | string;
  vertical?: "bottom" | "top" | "center";
  horizontal?: "center" | "left" | "right";
  verticalT?: "bottom" | "top" | "center";
  horizontalT?: "center" | "left" | "right";
  button: string | ReactNode;
}
