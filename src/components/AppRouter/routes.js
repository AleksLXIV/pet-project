import { ADMIN_ROUTE, ITEM_CARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, REDIRECT, FAVORITE_ROUTE } from './../../utils/constRoutes';
import { Navigate } from 'react-router-dom'

import Home from '../../pages/Home/Home';
import Admin from '../../pages/Admin/Admin'
import Auth from '../../pages/Auth/Auth'
import ItemCard from '../../pages/ItemCard/ItemCard';
import Favorite from './../../pages/Favorite/Favorite';


export const authRouter = [
    { path: ADMIN_ROUTE, elements: <Admin /> }
]

export const publicRoutes = [
    { path: HOME_ROUTE, elements:<Home /> },
    { path: ITEM_CARD_ROUTE + ':/id', elements:<ItemCard /> },
    { path: LOGIN_ROUTE, elements: <Auth /> },
    { path: REGISTRATION_ROUTE, elements: <Auth /> },
    { path: FAVORITE_ROUTE, elements: <Favorite /> },
    { path: REDIRECT, elements: <Navigate replace to= '/'/> }
] 