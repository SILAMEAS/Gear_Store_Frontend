import { Card, Typography } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {WeekdayData} from "./types.ts";

const data: WeekdayData[] = [
    { day: "Mon", tickets: 35 },
    { day: "Tue", tickets: 15 },
    { day: "Wed", tickets: 40 },
    { day: "Thu", tickets: 45 },
    { day: "Fri", tickets: 50 },
    { day: "Sat", tickets: 30 },
]

export default function WeekdayChart() {
    return (
        <Card sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
                Number of Tickets / Week Day
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip />
                    <Bar dataKey="tickets" fill="#4fd1c5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}

