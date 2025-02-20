import { Card, Typography } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {TicketData} from "./types.ts";

const data: TicketData[] = [
    { month: "Jan", created: 35, solved: 30 },
    { month: "Feb", created: 45, solved: 40 },
    { month: "Mar", created: 40, solved: 35 },
    { month: "Apr", created: 50, solved: 45 },
    { month: "May", created: 65, solved: 55 },
    { month: "Jun", created: 55, solved: 50 },
    { month: "Jul", created: 60, solved: 45 },
]

export default function TicketsChart() {
    return (
        <Card sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
                Tickets Created vs Tickets Solved
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip />
                    <Line type="monotone" dataKey="created" stroke="#bb86fc" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="solved" stroke="#4fd1c5" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}

