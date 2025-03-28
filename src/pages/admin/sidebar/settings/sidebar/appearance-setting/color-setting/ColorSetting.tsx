import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material"
import {styled} from "@mui/material/styles"
import {StyleConstant} from "@components/TableCustom/constant/StyleConstant.tsx";

// Custom styled components
const ColorPreview = styled(Box)(({ color }:{ color :string}) => ({
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: color,
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(2),
}))

export default function ColorSetting() {

    // State colors data
    const stateColors = [
        { state: "Success", color: "#28a745", usageExample: "success" },
        { state: "Warning", color: "#ffc107",  usageExample: "warning" },
        { state: "Danger", color: "#dc3545",  usageExample: "danger" },
        { state: "Info", color: "#17a2b8",  usageExample: "info" },
        { state: "Primary", color: "#007bff", usageExample: "primary" },
        { state: "Secondary", color: "#6c757d", usageExample: "secondary" },
    ]


    // Button examples
    const buttonExamples:Array<{label:string,color:any,variant?:any}> = [
        { label: "Default", color: "default" },
        { label: "Primary", color: "primary" },
        { label: "Info", color: "info" },
        { label: "Success", color: "success" },
        { label: "Warning", color: "warning" },
        { label: "Danger", color: "error" },
        { label: "Gray", color: "secondary" },
        { label: "Inverse", color: "primary", variant: "contained" },
    ]

    return (
        <Stack  sx={{ py: 4 ,width:"100%",overflow:"auto",height:"100%",...StyleConstant.scrollNormal}}>
            {/** States Colors Section */}
            <Paper elevation={1} sx={{ px: 3, mb: 4 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        States Colors
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sing comes with a number of state colors that can be applied to the most of elements and components. It
                        reuses Bootstrap's original 6 states.
                    </Typography>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>STATE</StyledTableCell>
                                <StyledTableCell>PREVIEW</StyledTableCell>
                                <StyledTableCell>USAGE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stateColors.map((row) => (
                                <TableRow key={row.state}>
                                    <StyledTableCell>{row.state}</StyledTableCell>
                                    <StyledTableCell>
                                        <ColorPreview color={row.color} />
                                    </StyledTableCell>
                                    <StyledTableCell sx={{ color: "#dc3545" }}>"{row.usageExample}"</StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/** Example Buttons Section */}
            <Paper elevation={1} sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" component="h2">
                        Example
                        <Typography variant="h6" component="span" sx={{ ml: 1 }}>
                            Buttons
                        </Typography>
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Use any of the available button classes to quickly create a styled button. Semantically distinguishable
                    beauty.
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {buttonExamples.map((btn) => (
                        <Button
                            key={btn.label}
                            color={ btn.color}
                            variant={(btn.variant || (btn.color === "default" ? "outlined" : "contained")) as any}
                            sx={{
                                textTransform: "none",
                                // ...(btn.color === "default" && { bgcolor: "#f8f9fa", color: "#212529" }),
                                // ...(btn.label === "Gray" && { bgcolor: "#6c757d", color: "white" }),
                                // ...(btn.label === "Inverse" && { bgcolor: "#343a40", color: "white" }),
                            }}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </Box>
            </Paper>
        </Stack>
    )
}

