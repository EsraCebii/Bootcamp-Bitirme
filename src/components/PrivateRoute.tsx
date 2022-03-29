import { Route, Navigate, } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {

    const token = localStorage.getItem("token")
    if (token) return <Component />;
    return <Navigate to='/login' />;
}

export default PrivateRoute;