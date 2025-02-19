import {Stack, Typography} from "@mui/material";
import useTableCustom from "../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../utils/handleProcessPassingData.ts";
import TableCustom from "../components/TableCustom.tsx";
import {ResProduct, ResProducts} from "../../../redux/services/types/ProductInterface.tsx";
import React from "react";
import {useGetAllProductsQuery} from "../../../redux/services/productApi.ts";

const CTableProducts = <CO extends ResProduct>() =>
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

    const {currentData, isFetching, isError, error, isLoading} =useGetAllProductsQuery({page:1,pageSize:10});
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
        //<TableCustom<DocumentTableInterface, CO>
        <TableCustom<ResProducts, CO>
            tableContainerSx={{
                height:"100%",
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