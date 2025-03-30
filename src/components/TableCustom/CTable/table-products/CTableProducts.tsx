import {Checkbox, Chip, IconButton, Stack} from "@mui/material";
import {ResProduct, ResProducts} from "@redux/services/types/ProductInterface.tsx";
import React from "react";
import {useDeleteProductsMutation, useGetAllProductsQuery} from "@redux/services/productApi.ts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavHeaderCTableProduct from "@components/TableCustom/CTable/table-products/NavHeaderCTableProduct.tsx";
import useRTKFromStore from "@utils/hooks/useRTKFromStore.tsx";
import GridProduct from "@components/TableCustom/CTable/table-products/GridProduct.tsx";
import EnumTableType from "@components/TableCustom/constant/enum/EnumTableType.ts";
import {EnumRole} from "@redux/services/types/IUserApi.ts";
import {enqueueSnackbar} from "notistack";
import {$handleResponseMessage} from "@utils/common/$handleResponseMessage.ts";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {Route} from "@constant/Route.ts";
import {EnumButtonThreeDot} from "@constant/GlobalConstants.tsx";
import handleProcessPassingData from "@components/TableCustom/utils/handleProcessPassingData.ts";
import EnumTableFooterType from "@components/TableCustom/constant/enum/EnumTableFooterType.ts";
import Text from "@components/text/Text.tsx";
import RatingCustom from "@components/rating/RatingCustom.tsx";
import PopOver from "@components/pop-over/PopOver.tsx";
import ButtonThreeDot from "@components/TableCustom/CTable/table-products/ButtonThreeDot.tsx";
import TableCustom from "@components/TableCustom/components/TableCustom.tsx";
import useTableCustom, {defaultFilter} from "@components/TableCustom/hooks/useTableCustom.tsx";

const CTableProducts = <CO extends ResProduct&{arrayIndex:number}>() =>
{
    const [popUp, setPopUp] = React.useState<boolean>(true);
    const {navigate}=useGlobalHook();
    const [deleteProduct]=useDeleteProductsMutation()
    const {userDetail}=useRTKFromStore();
    const IsAdmin=userDetail?.role===EnumRole.ADMIN;
    const {
        setVisibleRows,
        visibleRows,
        selected,
        setSelected,
        handleSelectAllClick,
        filter,
        setFilter,
        tableFooterType,
        handleSelectedAllOrCancelAll,
        isSelected,
        handleClick
    } = useTableCustom<CO>(IsAdmin?EnumTableFooterType.pagination:EnumTableFooterType.infiniteScroll,{...defaultFilter,pageSize:IsAdmin?10:25});
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
            const newMap: CO[] = contents.map((item,index) => {
                return {...item,arrayIndex: index,} as CO;
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
    const wayPointProcess =
        Boolean(tableFooterType === EnumTableFooterType.infiniteScroll &&
            visibleRows.length > 0 &&
            currentData?.hasNext);
    const handleViewDetailPage = (data: CO) => {
        handleClick(data.id);
    };
    return (
        <TableCustom<ResProducts, CO>
            tableContainerSx={{
                height:`calc( 100vh - ${IsAdmin?400:330}px )`
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
            display={IsAdmin?EnumTableType.table :EnumTableType.grid}
            onlySearch={userDetail?.role!==EnumRole.ADMIN}
            selectedUI={<Text>NO</Text>}
            headCells={[
                {
                    id: 'id',
                    disableSort: false,
                    label: (
                        <Stack direction={'row'} alignItems={'center'}>
                            <Checkbox
                                color="primary"
                                checked={selected.length === visibleRows.length}
                                onClick={handleSelectedAllOrCancelAll}
                            />
                            <Text>ID</Text>
                        </Stack>
                    ),
                    tableCellProps: {
                        align: "left",
                        padding: "none",

                    },
                    tableSortLabelProps: {},
                    render: row => {
                        const isItemSelected = isSelected((row.id));
                        const labelId = `enhanced-table-checkbox-${row.arrayIndex}`;
                        return (
                            <Stack direction={'row'} alignItems={'center'}>
                                <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                    onClick={() => handleViewDetailPage(row)}
                                />
                                <Text>
                                    #{row.id}
                                </Text>
                            </Stack>
                        );
                    },
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
                                route={EnumButtonThreeDot.product}
                                setPopUp={setPopUp}
                                data={data}
                                handleConfirmDeleteOuter={async ()=>{
                                   try {
                                       await deleteProduct({id: data.id}).unwrap();
                                   }
                                   catch (e){
                                       enqueueSnackbar(
                                           $handleResponseMessage({ e }),
                                           { variant: "error" }
                                       );
                                   }
                                }}
                                handleEditOuter={()=>{
                                    navigate(`${Route.admin.PRODUCT}/${data.id}`);
                                }}
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
            gridLayout={
                <GridProduct
                    filter={filter}
                    setFilter={setFilter}
                    visibleRows={visibleRows}
                    wayPointProcess={wayPointProcess}
                />
            }
        >
            {/** Navigation of Header Table Product **/}
            {
                IsAdmin && <NavHeaderCTableProduct filter={filter} setFilter={setFilter} />
            }
        </TableCustom>
    );
};

export default CTableProducts;