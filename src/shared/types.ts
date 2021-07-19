//Requested Data Format
export interface reqdata {
    columns: string[],
    query?: string,
    sort?:string,
    group?: string,
    recordsPerPage?:number,
    pageNo?:number,
    transformationType: string
}