import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRouter, publicRoutes } from './routes';


const AppRouter = () => {

    const isAuth = true

    return (
        <Routes>
            {isAuth && authRouter.map(item =>
                <Route key={item.path} path={item.path} element= {item.elements}/>
            )
            }

            {publicRoutes.map(item =>
                <Route key={item.path} path={item.path} element={item.elements} exact />
            )}
        </Routes>
    )
}
export default AppRouter