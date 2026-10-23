import { createBrowserRouter } from "react-router-dom";
import Error404 from "./page/Errors/Error404/Error404";
import Landing from "./page/Landing/Landing";
const router = createBrowserRouter([
    {path: "*", element: <Error404 /> },
    {path: '/', element:<Landing/>}
])
export default router;