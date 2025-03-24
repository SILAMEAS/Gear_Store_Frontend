import SearchIcon from "@mui/icons-material/Search";
import {Autocomplete, InputAdornment, SxProps, TextField} from "@mui/material";
import {debounce} from "lodash";
import React, {useCallback} from "react";

export default function SearchCustom({
                                     sx,
                                     place,
                                 }: Readonly<{
    sx?: SxProps;
    place?: string;
}>) {

    const [list, setList] = React.useState<string[]>([]);
    const [search, setSearch] = React.useState<string>("");
    const [placeholder, setPlaceholder] = React.useState<string>(
      "search"
    );
    /** search when stop typing **/
    const handleSearchDebounce = useCallback(
        debounce(async (s: string) => {
            setSearch(s);
            switch (place) {
                default: {
                    // return dispatch(setEndUserGlobalFilter({search: s}));
                    return
                }
            }
        }, 5000),
        [],
    );
    /** fetching auto complete **/
    const handlerFetching = async () => {
        switch (place) {
            default: {
                setPlaceholder("search");
                return setList([]);
            }
        }
    };
    /**  if place not equal empty search and search > 2, and it is string handleFetching will process  **/
    React.useMemo(() => {
        setList([]);
        if (place) {
            /** if it isn't number wait to length > 2 for searching **/
            if (isNaN(Number(search))) {
                if (search.length > 2) {
                    handlerFetching().then(r => r);
                }
            } else {
                handlerFetching().then(r => r);
            }
        }
    }, [search]);
    return (
        <Autocomplete
            onChange={(_event: React.SyntheticEvent, value) => {
                handleSearchDebounce(`${value?.toString()}`);
            }}
            id="free-solo-demo"
            freeSolo
            options={list.map(option => option)}
            sx={{
                width:"100%",
                height: "36px",
            }}
            clearIcon={<></>}
            renderInput={params => {
                return (
                    <TextField
                        {...params}
                        size={"small"}
                        placeholder={`${placeholder}`}
                        onChange={event => {
                            handleSearchDebounce(event.target.value);
                        }}
                        sx={{
                            width: "500px",
                            borderRadius:"6px",
                            height: "20px",
                            ...sx,
                        }}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment
                                    position={"end"}
                                    sx={{mr: 2}}>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            shrink: false,
                            focused: false,
                        }}
                    />
                );
            }}
        />
    );
}
