import {Skeleton, Stack, TableCell, TableRow, Typography} from "@mui/material";

import React from "react";
import EnumTableFooterType from "@components/TableCustom/constant/enum/EnumTableFooterType.ts";

export const SkeletonLoadingTableCustom = ({
  isLoading,
  emptyData,
                                             tableFooterType,
                                             isFetching
}: Readonly<{
  isFetching: boolean;
  isLoading: boolean;
  emptyData?: React.ReactNode;
  tableFooterType: EnumTableFooterType
}>) => {
  switch (tableFooterType){
    case EnumTableFooterType.pagination:{
      if (isLoading||isFetching) {
        return (
            <Stack p={2} height={"290px"} width={"100vw"}>
              {Array.from({length: 8}, (_, index: number) => (
                  <Skeleton
                      key={index}
                      variant={"rectangular"}
                      sx={{
                        borderRadius:"3px",
                        mb: 0.5,
                      }}
                      animation="pulse"
                      width={"auto"}
                      height={"35px"}
                  />
              ))}
            </Stack>
        );
      } else {
        return (
            <TableRow sx={{height:"300px"}}>
              <TableCell sx={{border: "none", textAlign: "center"}} colSpan={7}>
                {emptyData ?? (
                    <Typography>no-result</Typography>
                )}
              </TableCell>
            </TableRow>
        );
      }
    }
    case EnumTableFooterType.infiniteScroll:{
      if (isLoading) {
        return (
            <Stack p={2} height={"290px"} width={"100vw"}>
              {Array.from({length: 8}, (_, index: number) => (
                  <Skeleton
                      key={index}
                      variant={"rectangular"}
                      sx={{
                        borderRadius:"3px",
                        mb: 0.5,
                      }}
                      animation="pulse"
                      width={"auto"}
                      height={"35px"}
                  />
              ))}
            </Stack>
        );
      } else {
        return (
            <TableRow sx={{height:"300px"}}>
              <TableCell sx={{border: "none", textAlign: "center"}} colSpan={7}>
                {emptyData ?? (
                    <Typography>no-result</Typography>
                )}
              </TableCell>
            </TableRow>
        );
      }
    }
    default:{
     return <></>
    }
  }
};
