import { Card, Typography, Box } from "@mui/material"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import {TicketTypeData} from "./types.ts";

const data: TicketTypeData[] = [
    { name: "Sales", value: 44, color: "#3182ce" },
    { name: "Setup", value: 25, color: "#4fd1c5" },
    { name: "Bug", value: 19, color: "#805ad5" },
    { name: "Features", value: 12, color: "#38b2ac" },
]

export default function TicketsType() {
    return (
        <Card sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
                Tickets By Type
            </Typography>
            <Box sx={{ height: "90%", position: "relative" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    )
}

