import {  ITableCustom } from "../components/types.ts";
import EnumTableFooterType from "../constant/enum/EnumTableFooterType.ts";


type typePick = "tableFooterType" | "hasNext" | "visibleRows";
type IWayPointProcess<P, T> = Pick<ITableCustom<P, T>, typePick>
export default function wayPointProcess<
  P extends Record<string, any>,
  T extends Record<string, any>,
>({tableFooterType, hasNext, visibleRows}: Readonly<IWayPointProcess<P, T>>) {

  return (
    tableFooterType === EnumTableFooterType.infiniteScroll &&
    visibleRows.length > 0 &&
    hasNext
  );
}
