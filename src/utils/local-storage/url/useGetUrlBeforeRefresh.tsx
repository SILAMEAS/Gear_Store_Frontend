export const useGetUrlBeforeRefresh = () => {
    const lastUrl =localStorage.getItem("lastUrl");
    return  {lastUrl}
};


