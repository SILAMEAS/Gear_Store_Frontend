import React from "react";
import {Tooltip} from "@mui/material";
import Text from "@components/text/Text.tsx";

interface TruncatedTextProps {
    text: string;
    maxLength?: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength = 20 }) => {
    const isLong = text.length > maxLength;
    return (
        <Tooltip title={isLong ? text : ""} arrow>
            <Text
                gutterBottom
                // variant="h5"
                noWrap
                sx={{
                    width: "100%",              // Make the width responsive
                    overflow: "hidden",         // Hide overflow text
                    textOverflow: "ellipsis",   // Show ellipsis for overflowed text
                }}
            >
                {isLong ? `${text.slice(0, maxLength)}...` : text}
            </Text>
        </Tooltip>
    );
};

export default TruncatedText;
