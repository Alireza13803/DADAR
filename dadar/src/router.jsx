import { createBrowserRouter } from "react-router-dom";
import Error404 from "./page/Errors/Error404/Error404";
import Landing from "./page/Landing/Landing";
import Courses from "./page/Courses/Courses";
import ContactUs from "./page/ContactUs/ContactUs";
import News from "./page/News/News";
const router = createBrowserRouter([
    {path: "*", element: <Error404 /> },
    {path: '/', element:<Landing/>},
    {path: '/courses', element:<Courses/>},
    {path: '/news', element:<News/>},
    {path: '/contact-us', element:<ContactUs/>}
])
export default router;