import { createBrowserRouter } from "react-router-dom";
import Error404 from "./page/Errors/Error404/Error404";
import Home from "./page/Home/Home";
const router = createBrowserRouter([
    {path: "*", element: <Error404 /> },
    {path: '/', element:<Home/>}
])
export default router;