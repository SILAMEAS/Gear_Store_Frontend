export interface ReqPage{ pageSize :number, page :number }
export interface Pagination<T extends  Record<string, any>>{
    contents: Array<T>,
    hasNext:boolean,
    page:number,
    pageSize:number;
    total:number,
    totalPages:number,
}

