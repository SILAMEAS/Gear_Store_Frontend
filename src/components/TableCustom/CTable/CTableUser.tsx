import {Avatar, IconButton, Stack, Typography} from "@mui/material";
import useTableCustom from "../hooks/useTableCustom.tsx";
import EnumTableFooterType from "../constant/enum/EnumTableFooterType.ts";
import handleProcessPassingData from "../utils/handleProcessPassingData.ts";
import TableCustom from "../components/TableCustom.tsx";
import React from "react";
import {EnumRole, ResUser, ResUsers} from "../../../redux/services/types/IUserApi.ts";
import {useDeleteUserMutation, useGetUsersQuery} from "../../../redux/services/adminApi.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Route} from "../../../constants/Route.ts";
import useGlobalHook from "../../../utils/hooks/useGlobalHook.tsx";
import {setUserSelected} from "../../../redux/store/application.ts";

const CTableUser = <CO extends ResUser>() =>
{
    const {navigate,dispatch}=useGlobalHook();
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
    const [deleteUser]=useDeleteUserMutation({});
    const {currentData, isFetching, isError, error, isLoading} =useGetUsersQuery({page:filter.page,pageSize:filter.pageSize},{refetchOnMountOrArgChange:true});
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
        <TableCustom<ResUsers, CO>
            tableContainerSx={{
                height:"calc( 100vh - 150px )",
                width:"100%"
            }}
            // handleViewDetailPage={(row)=>{
            //     dispatch(setUserSelected(row));
            //     navigate(Route.admin.USER+"/"+row.id)
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
                    id: "profile_image",
                    disableSort: false,
                    label: "Profile",
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
                            <Avatar
                                src={String(data?.profile_image)}
                                sx={{ width: 36, height: 36 }}
                            />
                        </Stack>
                    ),
                },
                {
                    id: "email",
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
                                {data.email}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "role",
                    disableSort: false,
                    label: "Role",
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
                                {data.role}
                            </Typography>
                        </Stack>
                    ),
                },
                {
                    id: "id",
                    disableSort: false,
                    label: "Actions",
                    tableCellProps: {
                        align: "left",
                        padding: "none",
                        width:"500px",
                        sx:{
                            paddingLeft:"30px"
                        }
                    },
                    tableSortLabelProps: {},
                    stopPropagation:true,
                    render: data => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"15px"} pl={"30px"}>
                            <IconButton onClick={async ()=>{
                                try {
                                    await deleteUser({id:data.id}).unwrap();
                                }catch (e){
                                    console.error(e)
                                }
                            }} disabled={data.role===EnumRole.ADMIN}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton onClick={()=>{
                                dispatch(setUserSelected(data));
                                navigate(Route.admin.USER+"/"+data.id)
                            }}>
                                <EditIcon/>
                            </IconButton>
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

export default CTableUser;