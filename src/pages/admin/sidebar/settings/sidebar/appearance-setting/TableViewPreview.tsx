// Table view preview component
import EnumTableFooterType from "../../../../../../components/TableCustom/constant/enum/EnumTableFooterType.ts";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import {Check} from "lucide-react";
import Typography from "@mui/material/Typography";

export const TableViewPreview = ({
                              view,
                              selected,
                              onClick,
                          }: {
    view: string
    selected: boolean
    onClick: () => void
}) => {
    const isCompact = view === EnumTableFooterType.pagination

    return (
        <Box sx={{ textAlign: "center" }}>
            <Card
                onClick={onClick}
                sx={{
                    width: 180,
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
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                            View as {view}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ width: 30, height: 8, bgcolor: "#eee", borderRadius: 1 }} />
                    </Box>

                    {[1, 2, 3, 4].map((row) => (
                        <Box
                            key={row}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: isCompact ? 0.5 : 1,
                                py: isCompact ? 0.25 : 0.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    bgcolor: "#ddd",
                                    mr: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "70%",
                                    height: 6,
                                    bgcolor: "#eee",
                                    borderRadius: 1,
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Card>
            <Typography variant="body2">{view}</Typography>
        </Box>
    )
}