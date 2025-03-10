import { Card, Typography, Box, useTheme } from "@mui/material"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {SalesData} from "./types.ts";



export default function SalesChart({data}: { data:SalesData[] }) {
    const theme = useTheme()

    return (
        <Card sx={{ p: 3,height:"auto", minHeight: 450, bgcolor: "background.paper" }}>
            <Typography variant="h6" gutterBottom>
                Sales Overview
            </Typography>
            <Box sx={{ width: "100%", height: "100%" }}>
                <ResponsiveContainer>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                        <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
                        <YAxis stroke={theme.palette.text.secondary} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: theme.palette.background.paper,
                                border: `1px solid ${theme.palette.divider}`,
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="amount"
                            stroke={theme.palette.primary.main}
                            fillOpacity={1}
                            fill="url(#colorAmount)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    )
}

