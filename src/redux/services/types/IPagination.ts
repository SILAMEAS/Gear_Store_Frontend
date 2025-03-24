export interface ReqPage{ pageSize :number, page :number ,ordering?:string,search?:string}
export interface Pagination<T extends  Record<string, any>>{
    contents: Array<T>,
    hasNext:boolean,
    page:number,
    pageSize:number;
    total:number,
    totalPages:number,
}

