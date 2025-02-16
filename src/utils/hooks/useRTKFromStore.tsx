import {store} from "../../redux/redux.ts";

const useRKTFromStore = () => {
    const storeLocal = store.getState();
    const {application} = storeLocal;
    return {...application};
};

export default useRKTFromStore;