import {Pagination} from "./IPagination.ts";

export interface ResUserDetail {
    id:           string;
    username:     string;
    email:        string;
    first_name:   string;
    last_name:    string;
    is_staff:     boolean;
    is_superuser: boolean;
    is_active:    boolean;
}

export interface ResUser {
    id:           string;
    username:     string;
    email:        string;
    is_active:    boolean;
    is_staff:     boolean;
    is_superuser: boolean;
}
export interface ResUsers extends Pagination<ResUser>{}