import { createBrowserRouter, Outlet } from "react-router-dom";

import Error404 from "./page/Errors/Error404/Error404";
import Landing from "./page/Landing/Landing";
import Courses from "./page/Courses/Courses";
import ContactUs from "./page/ContactUs/ContactUs";
import News from "./page/News/News";

import Header from "./components/Header/Header";
import Footer from "./components/layout/footer/Footer";
// import AccountHeader from "./components/Header/AccountHeader";
const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer/>
  </>
);

// const AccountLayout = () => (
//   <>
//     <AccountHeader />
//     <Outlet />
//   </>
// );


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "*", element: <Error404 /> },
            { path: "/", element: <Landing /> },
            { path: "/courses", element: <Courses /> },
            { path: "/news", element: <News /> },
            { path: "/contact-us", element: <ContactUs /> }
        ],
    },

    // مسیر حساب کاربری را اینجا اضافه کن
    // {
    //     path: "/account",
    //     element: <AccountLayout />,
    //     children: [
    //     { index: true, element: <Account /> },
    //     ],
    // },
]);


export default router;