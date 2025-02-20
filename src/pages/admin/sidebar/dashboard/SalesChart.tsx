import { Card, Typography, Box, useTheme } from "@mui/material"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {SalesData} from "./types.ts";

const data: SalesData[] = [
    { date: "Jan", amount: 4000 },
    { date: "Feb", amount: 3000 },
    { date: "Mar", amount: 5000 },
    { date: "Apr", amount: 2780 },
    { date: "May", amount: 1890 },
    { date: "Jun", amount: 2390 },
    { date: "Jul", amount: 3490 },
]

export default function SalesChart() {
    const theme = useTheme()

    return (
        <Card sx={{ p: 3, height: 400, bgcolor: "background.paper" }}>
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

