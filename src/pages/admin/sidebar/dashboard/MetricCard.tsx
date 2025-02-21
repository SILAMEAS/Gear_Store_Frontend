import {Box, Card, IconButton, Typography} from "@mui/material"
import {styled} from "@mui/material/styles"
import {MetricCardProps} from "./types.ts";

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
}))

const IconWrapper = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
    backgroundColor: bgcolor,
    borderRadius: "12px",
    padding: "12px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
}))

export default function MetricCard({ title, value, icon, color }: MetricCardProps) {
    return (
        <StyledCard>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box>
                    <Typography color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {value}
                    </Typography>
                </Box>
                <IconWrapper bgcolor={`${color}22`}>
                    <IconButton sx={{ color: color, p: 0 }}>{icon}</IconButton>
                </IconWrapper>
            </Box>
            {/**
             <Box display="flex" alignItems="center" mt={2}>
             {trend >= 0 ? (
             <TrendingUp sx={{ color: "success.main", mr: 1 }} />
             ) : (
             <TrendingDown sx={{ color: "error.main", mr: 1 }} />
             )}
             <Typography variant="body2" color={trend >= 0 ? "success.main" : "error.main"} mr={1}>
             {Math.abs(trend)}%
             </Typography>
             <Typography variant="body2" color="text.secondary">
             {trendLabel}
             </Typography>
             </Box>
             **/}

        </StyledCard>
    )
}

/**
     <MetricCard
     title="Active Orders"
     value="126"
     icon={<LocalShipping />}
     trend={-2.3}
     trendLabel="vs last month"
     color="#4caf50"
     />
 * */