import {Pagination} from "./IPagination.ts";

export enum EnumRole{
    ADMIN="admin",
    STAFF="staff",
    USER="user"
}
export interface ResUserDetail {
    id:            string;
    username:      string;
    email:         string;
    first_name:    string;
    last_name:     string;
    is_active:     boolean;
    profile_image: string;
    role:          EnumRole;
    phone:         string;
    dob:           string;
    country:       string;
    city:          string;
    postal_code:   string;
}

export interface ResUser {
    id:           string;
    username:     string;
    email:        string;
    is_active:    boolean;
    role : EnumRole
}
export interface ResUsers extends Pagination<ResUser>{}