export const formattedDate = (timestamp:string)=>{
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "medium",
    }).format(new Date(timestamp))
}
