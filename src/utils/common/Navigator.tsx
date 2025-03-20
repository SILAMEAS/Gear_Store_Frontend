
export const Navigator = (goto: string, companyDefault?: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const company =
        companyDefault ?? localStorage.getItem("company") ?? "certigna";

    if (searchParams.has("company")) {
        searchParams.set("company", company);
    }


    return {
        pathname: goto,
        search: searchParams.toString(),
    };
};