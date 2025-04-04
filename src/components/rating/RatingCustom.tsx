import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Text from "@components/text/Text.tsx";

const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function RatingCustom({Value}:{Value:number}) {
    const [value, setValue] = React.useState<number | null>(Value);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(_, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Text sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Text>
            )}
        </Box>
    );
}
