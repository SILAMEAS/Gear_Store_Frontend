import React, {ReactNode, useEffect, useState} from "react"
import {Box, Button, Chip, Collapse, Divider, Grid, MenuItem, Paper, Stack, TextField, Typography} from "@mui/material"
import {Clear, ExpandLess, ExpandMore, FilterList, Search} from "@mui/icons-material"

// Define types for our data and filters
type DataItem = {
    id: number
    name: string
    category: string
    status: "active" | "inactive" | "pending"
    createdAt: string
    amount: number
}

type FilterValue = {
    name: string
    category: string
    status: string
    dateFrom: string
    dateTo: string
    amountMin: string
    amountMax: string
}

// Sample data
const sampleData: DataItem[] = [
    {
        id: 1,
        name: "Project Alpha",
        category: "Development",
        status: "active",
        createdAt: "2023-01-15",
        amount: 5000,
    },
    {
        id: 2,
        name: "Marketing Campaign",
        category: "Marketing",
        status: "pending",
        createdAt: "2023-02-20",
        amount: 3500,
    },
    {
        id: 3,
        name: "Server Upgrade",
        category: "IT",
        status: "active",
        createdAt: "2023-03-10",
        amount: 8000,
    },
    {
        id: 4,
        name: "Content Creation",
        category: "Marketing",
        status: "inactive",
        createdAt: "2023-01-05",
        amount: 2000,
    },
    {
        id: 5,
        name: "Database Migration",
        category: "Development",
        status: "pending",
        createdAt: "2023-04-12",
        amount: 6500,
    },
    {
        id: 6,
        name: "UI Redesign",
        category: "Design",
        status: "active",
        createdAt: "2023-02-28",
        amount: 4200,
    },
    {
        id: 7,
        name: "Security Audit",
        category: "IT",
        status: "inactive",
        createdAt: "2023-03-22",
        amount: 7500,
    },
    {
        id: 8,
        name: "Product Launch",
        category: "Marketing",
        status: "active",
        createdAt: "2023-05-01",
        amount: 9000,
    },
]

// Categories and statuses for filter dropdowns
const categories = ["Development", "Marketing", "IT", "Design"]
const statuses = ["active", "inactive", "pending"]
export interface IAdvancedFilterTable{RightSideComponent:ReactNode,LeftSideComponent:ReactNode}

export default function AdvancedFilterTable({RightSideComponent,LeftSideComponent}:IAdvancedFilterTable) {
    // State for filter panel visibility
    const [filterOpen, setFilterOpen] = useState(false)

    // State for filter values
    const [filters, setFilters] = useState<FilterValue>({
        name: "",
        category: "",
        status: "",
        dateFrom: "",
        dateTo: "",
        amountMin: "",
        amountMax: "",
    })

    // State for active filters display
    const [activeFilters, setActiveFilters] = useState<string[]>([])

    // State for filtered data
    const [filteredData, setFilteredData] = useState<DataItem[]>(sampleData)

    // Pagination state
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    // Handle filter changes
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Apply filters
    const applyFilters = () => {
        // Create array of active filter descriptions for display
        const newActiveFilters: string[] = []

        if (filters.name) newActiveFilters.push(`Name: ${filters.name}`)
        if (filters.category) newActiveFilters.push(`Category: ${filters.category}`)
        if (filters.status) newActiveFilters.push(`Status: ${filters.status}`)
        if (filters.dateFrom) newActiveFilters.push(`From: ${filters.dateFrom}`)
        if (filters.dateTo) newActiveFilters.push(`To: ${filters.dateTo}`)
        if (filters.amountMin) newActiveFilters.push(`Min Amount: $${filters.amountMin}`)
        if (filters.amountMax) newActiveFilters.push(`Max Amount: $${filters.amountMax}`)

        setActiveFilters(newActiveFilters)

        // Filter the data
        const filtered = sampleData.filter((item) => {
            // Name filter (case insensitive)
            if (filters.name && !item.name.toLowerCase().includes(filters.name.toLowerCase())) {
                return false
            }

            // Category filter
            if (filters.category && item.category !== filters.category) {
                return false
            }

            // Status filter
            if (filters.status && item.status !== filters.status) {
                return false
            }

            // Date range filter
            const itemDate = new Date(item.createdAt)
            if (filters.dateFrom && new Date(filters.dateFrom) > itemDate) {
                return false
            }
            if (filters.dateTo && new Date(filters.dateTo) < itemDate) {
                return false
            }

            // Amount range filter
            if (filters.amountMin && Number(filters.amountMin) > item.amount) {
                return false
            }
            if (filters.amountMax && Number(filters.amountMax) < item.amount) {
                return false
            }

            return true
        })

        setFilteredData(filtered)
        setPage(0) // Reset to first page when filters change
    }

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            name: "",
            category: "",
            status: "",
            dateFrom: "",
            dateTo: "",
            amountMin: "",
            amountMax: "",
        })
        setActiveFilters([])
        setFilteredData(sampleData)
    }

    // Remove a single filter
    const removeFilter = (filterToRemove: string) => {
        const filterType = filterToRemove.split(":")[0].trim().toLowerCase()

        // Map the display filter name to the state property
        const filterMap: Record<string, keyof FilterValue> = {
            name: "name",
            category: "category",
            status: "status",
            from: "dateFrom",
            to: "dateTo",
            "min amount": "amountMin",
            "max amount": "amountMax",
        }

        // Update the filters state
        if (filterMap[filterType]) {
            setFilters((prev) => ({
                ...prev,
                [filterMap[filterType]]: "",
            }))
        }

        // Remove from active filters
        setActiveFilters((prev) => prev.filter((f) => f !== filterToRemove))
    }

    // Re-apply filters when filters state changes
    useEffect(() => {
        if (activeFilters.length > 0) {
            applyFilters()
        }
    }, [filters])

    return (
            <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    {LeftSideComponent}
                    <Stack direction={'row'} gap={2}>
                        <Button
                            variant="outlined"
                            startIcon={filterOpen ? <ExpandLess /> : <ExpandMore />}
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            {filterOpen ? "Hide Filters" : "Show Filters"}
                        </Button>
                        {RightSideComponent}
                    </Stack>
                </Box>

                <Collapse in={filterOpen}>
                    <Divider sx={{ mb: 2 }} />

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        {/*<Grid item xs={12} sm={6} md={3}>*/}
                        {/*    <TextField*/}
                        {/*        fullWidth*/}
                        {/*        label="Name"*/}
                        {/*        name="name"*/}
                        {/*        value={filters.name}*/}
                        {/*        onChange={handleFilterChange}*/}
                        {/*        variant="outlined"*/}
                        {/*        size="small"*/}
                        {/*    />*/}
                        {/*</Grid>*/}

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                select
                                fullWidth
                                label="Category"
                                name="category"
                                value={filters.category}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                            >
                                <MenuItem value="">All Categories</MenuItem>
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                select
                                fullWidth
                                label="Status"
                                name="status"
                                value={filters.status}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                            >
                                <MenuItem value="">All Statuses</MenuItem>
                                {statuses.map((status) => (
                                    <MenuItem key={status} value={status}>
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label="From Date"
                                name="dateFrom"
                                type="date"
                                value={filters.dateFrom}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label="To Date"
                                name="dateTo"
                                type="date"
                                value={filters.dateTo}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label="Min Amount"
                                name="amountMin"
                                type="number"
                                value={filters.amountMin}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                                InputProps={{ startAdornment: "$" }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label="Max Amount"
                                name="amountMax"
                                type="number"
                                value={filters.amountMax}
                                onChange={handleFilterChange}
                                variant="outlined"
                                size="small"
                                InputProps={{ startAdornment: "$" }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", alignItems: "center" }}>
                            <Button variant="contained" startIcon={<Search />} onClick={applyFilters} sx={{ mr: 1 }}>
                                Apply
                            </Button>
                            <Button variant="outlined" startIcon={<Clear />} onClick={clearFilters}>
                                Clear
                            </Button>
                        </Grid>
                    </Grid>
                </Collapse>

                {activeFilters.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                            <FilterList fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">Active Filters:</Typography>
                        </Box>
                        {activeFilters.map((filter) => (
                            <Chip key={filter} label={filter} onDelete={() => removeFilter(filter)} size="small" variant="outlined" />
                        ))}
                    </Box>
                )}
            </Paper>)}