const getToken = () => {
    const refresh =localStorage.getItem("refresh");
    const access =localStorage.getItem("access");
    return  {refresh,access}
};

export default getToken;
