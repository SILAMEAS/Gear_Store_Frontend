export interface ReqPage{ limit :number, page :number }
export interface Pagination<T extends  Record<string, any>>{
    contents: Array<T>,
    hasNext:boolean,
    currentPage:number,
    total:number
    totalPages:number
}

