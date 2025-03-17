import {Chip, IconButton, Stack, Typography} from "@mui/material";
import useTableCustom from "../../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../../utils/handleProcessPassingData.ts";
import TableCustom from "../../components/TableCustom.tsx";
import {ResProduct, ResProducts} from "../../../../redux/services/types/ProductInterface.tsx";
import React from "react";
import {useGetAllProductsQuery} from "../../../../redux/services/productApi.ts";
import Text from "../../../Text/Text.tsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonThreeDot from "./ButtonThreeDot.tsx";
import PopOver from "../../../pop-over/PopOver.tsx";

const CTableProducts = <CO extends ResProduct>() =>
{
    const [popUp, setPopUp] = React.useState<boolean>(true);
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
                height:"calc( 100vh - 200px )",
            }}
            // handleViewDetailPage={(row)=>{
            //     navigate(Route.admin.PRODUCT+"/"+row.id)
            // }}
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
                        width:"auto",

                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Text>#{data.id}</Text>
                    ),
                },
                {
                    id: "image",
                    disableSort: false,
                    label: "Image",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"auto",

                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <img src={`${data.image}`} alt={`${data.image}`} width={40} height={40}
                             style={{borderRadius: 8, objectFit: "cover"}}/>
                    ),
                },
                {
                    id: "name",
                    disableSort: false,
                    label: "Name",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"auto",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
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
                        width:"auto",

                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
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
                        width:"auto",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
                            <Text>
                                {data.stock}
                            </Text>
                        </Stack>
                    ),
                },
                {
                    id: "categoryName",
                    disableSort: false,
                    label: "Category",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"auto",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Chip label={data.categoryName} size="small" variant="outlined" />
                    ),
                },
                {
                    id: "thumbnails",
                    disableSort: false,
                    label: "Action",
                    tableCellProps: {
                        align: "center",
                        padding: "none",
                        width:"200px",

                    },
                    tableSortLabelProps: {},
                    render: data => (
                    <PopOver
                        open={popUp}
                        button={
                            <IconButton size="small"
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        onClick={() => setPopUp(true)}
                        contain={
                            <ButtonThreeDot<CO>
                                setPopUp={setPopUp}
                                data={data}
                            />
                        }
                        horizontal={"center"}
                    />),
                }
            ]}
            selected={selected}
            handleSelectAllClick={handleSelectAllClick}
            hasNext={currentData?.hasNext ?? false}
            emptyData={
                <Text>No Result</Text>
            }
        />
    );
};

export default CTableProducts;