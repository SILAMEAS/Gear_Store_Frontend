export const storeToken = (res:Record<string, any>) => {
    localStorage.setItem("token", JSON.stringify(res));
};