export const cleanPath = (path: string): string => {
    let end = path.length;
    while (end > 0 && path[end - 1] === '/') {
        end--;
    }
    return path.slice(0, end);
};