import {Pagination} from "./IPagination.ts";

export enum EnumRole{
    ADMIN="admin",
    MODERATOR="moderator",
    USER="user"
}
export interface ResUser {
    id:            string;
    username:      string;
    email:         string;
    first_name:    string;
    last_name:     string;
    is_active:     boolean;
    profile_image: File | null;
    role:          EnumRole;
    phone:         string;
    dob:           string;
    country:       string;
    city:          string;
    postal_code:   string;
}
export interface ReqUserDetail extends Omit<ResUser, "id">{
    password: string
}

export interface ResUsers extends Pagination<ResUser>{}
/** Form */
export interface UserFormData extends ReqUserDetail{
    password: string
    confirmPassword: string
}