// Theme preview component
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import {Check} from "lucide-react";
import Text from "../../../../../../../components/text/Text.tsx";

export const ThemePreview = ({
                          theme,
                          selected,
                          onClick,
                      }: {
    theme: string
    selected: boolean
    onClick: () => void
}) => {
    const isDark = theme === "Dark"
    return (
        <Box sx={{ textAlign: "center" }}>
            <Card
                onClick={onClick}
                sx={{
                    width: 190,
                    height: 120,
                    cursor: "pointer",
                    position: "relative",
                    border: selected ? "2px solid #2C68F6" : "1px solid #e0e0e0",
                    borderRadius: "8px",
                    overflow: "hidden",
                    mb: 1,
                }}
            >
                {selected && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: 8,
                            bgcolor: "#2C68F6",
                            borderRadius: "50%",
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                        }}
                    >
                        <Check size={16} />
                    </Box>
                )}
                <Box sx={{ display: "flex", height: "100%" }}>
                    <Box
                        sx={{
                            width: "30%",
                            bgcolor: isDark ? "#333" : "#f5f5f5",
                            borderRight: "1px solid #e0e0e0",
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: 3,
                                bgcolor: !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                        <Box
                            sx={{
                                width: "80%",
                                height: 3,
                                bgcolor:  !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                        <Box
                            sx={{
                                width: "60%",
                                height: 3,
                                bgcolor:  !isDark ? "#999" : "#666",
                                mb: 0.5,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "70%",
                            bgcolor:  isDark ? "#222" : "#fff",
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: 10,
                                bgcolor: isDark ? "#444" : "#eee",
                                mb: 1,
                            }}
                        />
                        <Box
                            sx={{
                                width: "100%",
                                height: 60,
                                bgcolor: isDark ? "#444" : "#eee",
                            }}
                        />
                    </Box>
                </Box>
            </Card>
            <Text variant="body2">{theme}</Text>
        </Box>
    )
}