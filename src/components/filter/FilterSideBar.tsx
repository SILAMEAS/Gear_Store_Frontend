import {
    Box,
    Checkbox,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    styled,
} from "@mui/material"
import {ExpandLess, ExpandMore} from "@mui/icons-material"
import {useState} from "react"
import {StyleCustom} from "@/styles/StyleCustom.tsx";
import Colors from "@theme/mode/Colors.ts";


const StyledListItem = styled(ListItem)(({ theme }) => ({
    padding: 0,
    marginBottom: theme.spacing(0.5),
    "& .MuiListItemButton-root": {
        borderRadius: theme.spacing(1),
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
    },
}))



interface FilterSection {
    title: string
    options: string[]
}

const filterSections: FilterSection[] = [
    {
        title: "Category",
        options: ["Living", "Auto", "Gadget", "Fashion"],
    },
    {
        title: "Price",
        options: ["Highest", "Lowest"],
    },
    {
        title: "Location",
        options: ["Nearest", "Farthest"],
    },
    {
        title: "Rating",
        options: ["Highest", "Lowest"],
    },
    {
        title: "Shipping",
        options: ["Regular", "Next Day", "Instant"],
    },
    {
        title: "City",
        options: ["Jakarta", "Semarang", "Malang"],
    },
]

export default function FilterSidebar() {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        Category: true,
        Price: true,
        Location: true,
        Rating: true,
        Shipping: true,
        City: true,
    })
    const [selectedItems, setSelectedItems] = useState<string[]>(["Gadget"])

    const handleSectionClick = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const handleItemClick = (item: string) => {
        setSelectedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
    }

    return (
        <Stack width={"100%"} p={"20px"} overflow={"auto"} sx={{...StyleCustom.scrollNormal}}>
            {filterSections.map((section) => (
                <Box key={section.title}>
                    <ListItemButton
                        onClick={() => handleSectionClick(section.title)}
                        sx={{
                            py: 1,
                            minHeight: 44,
                            color: "#fff",
                        }}
                    >
                        <ListItemText
                            primary={section.title}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                            }}
                        />
                        {openSections[section.title] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openSections[section.title]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {section.options.map((option) => (
                                <StyledListItem key={option} disablePadding>
                                    <ListItemButton
                                        selected={selectedItems.includes(option)}
                                        onClick={() => handleItemClick(option)}
                                        sx={{
                                            py: 0,
                                            minHeight: 32,
                                            color: selectedItems.includes(option) ? "#2196f3" : "#fff",
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <Checkbox
                                                edge="start"
                                                checked={selectedItems.includes(option)}
                                                sx={{
                                                    color: Colors._666,
                                                    "&.Mui-checked": {
                                                        color: "#2196f3",
                                                    },
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={option}
                                            primaryTypographyProps={{
                                                fontSize: 14,
                                            }}
                                        />
                                    </ListItemButton>
                                </StyledListItem>
                            ))}
                        </List>
                        {section.title !== "City" && (
                            <ListItemButton
                                sx={{
                                    py: 0.5,
                                    minHeight: 32,
                                    color: Colors._666,
                                    "&:hover": {
                                        color: "#fff",
                                    },
                                }}
                            >
                                <ListItemText
                                    primary="Load more +"
                                    primaryTypographyProps={{
                                        fontSize: 12,
                                    }}
                                />
                            </ListItemButton>
                        )}
                    </Collapse>
                </Box>
            ))}
        </Stack>
    )
}

