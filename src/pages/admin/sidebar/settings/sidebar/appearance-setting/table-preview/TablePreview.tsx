import {useState} from "react";
import {Box, Typography} from "@mui/material";
import EnumTableFooterType from "@components/TableCustom/constant/enum/EnumTableFooterType.ts";
import {
    TableViewPreview
} from "@pages/admin/sidebar/settings/sidebar/appearance-setting/table-preview/TableViewPreview.tsx";

const TablePreview = () => {
    const [tableView, setTableView] = useState<EnumTableFooterType>(EnumTableFooterType.pagination)
    return  <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="500" gutterBottom>
            Tables view
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            How are tables displayed in the app.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TableViewPreview view="Pagination" selected={tableView === EnumTableFooterType.pagination} onClick={() => setTableView(EnumTableFooterType.pagination)} />
            <TableViewPreview view="Infinite Scroll" selected={tableView === EnumTableFooterType.infiniteScroll} onClick={() => setTableView( EnumTableFooterType.infiniteScroll)} />
        </Box>
    </Box>
};

export default TablePreview;
