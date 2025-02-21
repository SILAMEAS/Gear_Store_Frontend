export const validateEmail = (email: string) => {
    if (email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return "Please match the requested format";
        }
    } else {
        return undefined;
    }
};