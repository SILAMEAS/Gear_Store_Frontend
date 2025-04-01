import {Chip, Stack, Typography} from "@mui/material";
import useTableCustom from "../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../utils/handleProcessPassingData.ts";
import TableCustom from "../components/TableCustom.tsx";
import React from "react";
import {useGetOrdersQuery} from "@redux/services/adminApi.ts";
import {ResOrder, ResOrders} from "@redux/services/types/IAdminApi.ts";
import {getStatusColor} from "@utils/common/getStatusColor.ts";

const CTableOrder = <CO extends  ResOrder>() =>
{
    const {
        setVisibleRows,
        visibleRows,
        selected,
        setSelected,
        handleSelectAllClick,
        filter,
        setFilter,
        tableFooterType,
    } = useTableCustom<CO>(EnumTableFooterType.pagination);

    const {currentData, isFetching, isError, error, isLoading} =useGetOrdersQuery({page:filter.page,pageSize:filter.pageSize},{refetchOnMountOrArgChange:true});
    const handleSetVisibleRows = async (propData?: typeof currentData) => {
        if (propData) {
            const {contents, page} = propData;
            const newMap: CO[] = contents.map(item => {
                return item as any
            });

            handleProcessPassingData<CO>({
                tableFooterType,
                visibleRows,
                setVisibleRows,
                newMap,
                page,
                setSelected,
            });
        }
    };
    React.useEffect(() => {
        handleSetVisibleRows(currentData).then(() => {});
    }, [currentData]);
    return (
        <TableCustom< ResOrders, CO>
            tableContainerSx={{
                height:"calc( 100vh - 150px )",
                width:"100%"
            }}
            setVisibleRows={setVisibleRows}
            currentData={currentData}
            setFilter={setFilter}
            filter={filter}
            actionReq={{error, isLoading, isError, isFetching}}
            tableFooterType={tableFooterType}
            visibleRows={visibleRows}
            headCells={[
                {
                    id: "id",
                    disableSort: false,
                    label: "Username",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"500px",
                        sx:{
                            paddingLeft:"30px"
                        }
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} pl={"30px"}>
                            <Typography>
                                {data.id}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "user",
                    disableSort: false,
                    label: "Email",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"500px",
                        sx:{
                            paddingLeft:"30px"
                        }
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} pl={"30px"}>
                            <Typography>
                                {data.user}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "status",
                    disableSort: false,
                    label: "Active",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"500px",
                        sx:{
                            paddingLeft:"30px"
                        }
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} pl={"30px"}>
                            <Typography>
                                <Chip label={data.status} color={getStatusColor(data.status)} size="small" />
                            </Typography>
                        </Stack>
                    ),
                }
            ]}
            selected={selected}
            handleSelectAllClick={handleSelectAllClick}
            hasNext={currentData?.hasNext ?? false}
            emptyData={
                <Typography>No Result</Typography>
            }
        />
    );
};

export default CTableOrder;