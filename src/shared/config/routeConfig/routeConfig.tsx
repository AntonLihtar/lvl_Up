import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
}

export const routeConfig: Array<RouteProps> = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage/>
    }
]