import {debounce, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {IFilterTableCustom} from "./types.ts";
import React, {useCallback} from "react";
import {StyleConstant} from "../constant/StyleConstant.tsx";

export interface ISearchFormTableCustom{
    filter: IFilterTableCustom;
    setFilter: React.Dispatch<React.SetStateAction<IFilterTableCustom>>;
    placeholder?: string;
}
export const SearchFormTableCustom = ({
    setFilter,
    filter,
    placeholder = "default placeholder",
  }: ISearchFormTableCustom) => {
    /** search when stop typing **/
    const handleSearchDebounce = useCallback(
      debounce(async (search: string) => {
        setFilter({...filter, search});
      }, 500),
      [],
    );
    return (
      <TextField
        size={"small"}
        placeholder={placeholder}
        onChange={event => {
          handleSearchDebounce(event.target.value);
        }}
        sx={{
          ...StyleConstant.inputStyleLogin,
          width: "500px",
          borderRadius:"6px",
        }}
        InputProps={{
          // ...params.InputProps,
          startAdornment: (
            <InputAdornment position="end" sx={{mr: 2}}>
              <SearchIcon fontSize={"small"}/>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: false,
          focused: false,
        }}
      />
    );
  };
  