import {Stack, Typography} from "@mui/material";
import useTableCustom from "../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../utils/handleProcessPassingData.ts";
import TableCustom from "../components/TableCustom.tsx";
import {ResProduct, ResProducts} from "../../../redux/services/types/ProductInterface.tsx";
import React from "react";
import {useGetAllProductsQuery} from "../../../redux/services/productApi.ts";
import useGlobalHook from "../../../utils/hooks/useGlobalHook.tsx";
import {Route} from "../../../constants/Route.ts";

const CTableProducts = <CO extends ResProduct>() =>
{
    const {navigate}=useGlobalHook();
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

    const {currentData, isFetching, isError, error, isLoading} =useGetAllProductsQuery({page:filter.page,pageSize:filter.pageSize},{refetchOnMountOrArgChange:true});
    const handleSetVisibleRows = async (propData?: typeof currentData) => {
        if (propData) {
            const {contents, page} = propData;
            const newMap: CO[] = contents.map(item => {
                return item as CO;
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
        <TableCustom<ResProducts, CO>
            tableContainerSx={{
                height:"calc( 100vh - 150px )",
                width:"100%"
            }}
            handleViewDetailPage={(row)=>{
                navigate(Route.admin.PRODUCT+"/"+row.id)
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
                    label: "ID",
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
                        <img src={`${data.image}`} alt={`${data.image}`} width={60} height={60} style={{ borderRadius: 8 }} />
                    ),
                },
                {
                    id: "name",
                    disableSort: false,
                    label: "Name",
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
                                {data.name}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "price",
                    disableSort: false,
                    label: "Price",
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
                                {data.price}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "stock",
                    disableSort: false,
                    label: "Stock",
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
                                {data.stock}
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

export default CTableProducts;