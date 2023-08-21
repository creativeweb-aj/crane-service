import {Outlet, Navigate} from 'react-router-dom';

export const PrivateRoute = () => {
    const isAuth = localStorage.getItem("token") ? true : false; // your logic here

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
