// Color option component
import {Box} from "@mui/material";

export const ColorOption = ({
                         color,
                         selected,
                         onClick,
                     }: {
    color: string
    selected: boolean
    onClick: () => void
}) => (
    <Box
        onClick={onClick}
        sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: color,
            cursor: "pointer",
            border: selected ? "2px solid #2C68F6" : "none",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
        }}
    >
        {selected && <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: color }} />}
    </Box>
)
