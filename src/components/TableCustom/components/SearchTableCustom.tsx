import { SearchFormTableCustom } from "./NGSearch.tsx";
import { ITableCustom } from "./types.ts";

type typePick = "setFilter" | "filter" | "placeholder" | "onlySearch";
type ISearchTableCustom<P, T> = Pick<ITableCustom<P, T>, typePick>
export function SearchTableCustom<
  P extends Record<string, any>,
  T extends Record<string, any>,
>({
  onlySearch,
  setFilter,
  filter,
  placeholder,
}: Readonly<ISearchTableCustom<P, T>>) {
  return (
    <>
      {onlySearch && (
        <SearchFormTableCustom
          setFilter={setFilter}
          filter={filter}
          placeholder={placeholder}
        />
      )}
    </>
  );
}
