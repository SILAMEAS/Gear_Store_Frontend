import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {store} from "./redux/redux.ts";
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
);