import {Chip, IconButton, Stack} from "@mui/material";
import useTableCustom from "../../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../../utils/handleProcessPassingData.ts";
import TableCustom from "../../components/TableCustom.tsx";
import {ResProduct, ResProducts} from "@redux/services/types/ProductInterface.tsx";
import React from "react";
import {useGetAllProductsQuery} from "@redux/services/productApi.ts";
import Text from "../../../text/Text.tsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonThreeDot from "./ButtonThreeDot.tsx";
import PopOver from "../../../pop-over/PopOver.tsx";
import RatingCustom from "../../../rating/RatingCustom.tsx";
import NavHeaderCTableProduct from "@components/TableCustom/CTable/table-products/NavHeaderCTableProduct.tsx";

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
    const {currentData, isFetching, isError, error, isLoading} =useGetAllProductsQuery({
        page:filter.page,
        pageSize:filter.
            pageSize,
            ordering:filter.sortDirection==="asc"? filter.sortField:"-"+filter.sortField,
            search:filter.search
        },
        {refetchOnMountOrArgChange:true});

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
                height:"calc( 100vh - 400px )"
            }}
            setVisibleRows={setVisibleRows}
            currentData={currentData}
            setFilter={setFilter}
            filter={filter}
            actionReq={{error, isLoading, isError, isFetching}}
            tableFooterType={tableFooterType}
            visibleRows={visibleRows}
            placeholder={"Search Product"}
            paginationCollapse={false}
            headCells={[
                {
                    id: "id",
                    disableSort: false,
                    label: "Code",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
                            <Text>
                                # {data.id}
                            </Text>
                        </Stack>
                    ),
                },
                {
                    id: "image",
                    disableSort: true,
                    label: "Image",
                    tableCellProps: {
                        align: "left",
                        padding: "none",

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
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
                            <Text>
                                {data.name}
                            </Text>
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

                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} >
                            <Text>
                                {data.price}
                            </Text>
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
                    disableSort: true,
                    label: "Category",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Chip label={data.categoryName} size="small" variant="outlined" />
                    ),
                },
                {
                    id: "avg_rating",
                    disableSort: false,
                    label: "Rating",
                    tableCellProps: {
                        align: "left",
                        padding: "none",

                    },
                    tableSortLabelProps: {},
                    render: data =>  <RatingCustom Value={data.avg_rating}/>
                },
                {
                    id: "updated_at",
                    disableSort: false,
                    label: "Update At",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Text>
                            {data.updated_at?.replace("T"," ").split(".")[0]}
                        </Text>
                    ),
                },
                {
                    id: "created_at",
                    disableSort: true,
                    label: "",
                    tableCellProps: {
                        align: "center",
                        padding: "none",

                    },
                    tableSortLabelProps: {},
                    render: data => (
                    <PopOver
                        open={popUp}
                        button={
                            <IconButton size="small"
                            >
                                <MoreVertIcon fontSize={"small"
                                } color={"primary"}/>
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
        >
            {/** Navigation of Header Table Product **/}
            <NavHeaderCTableProduct filter={filter} setFilter={setFilter} />

        </TableCustom>
    );
};

export default CTableProducts;