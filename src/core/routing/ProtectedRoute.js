// import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const [permissions, setPermissions] = useState([]);
  // const { isAuthenticated, username } = useSelector((state) => state.auth);

  // window.location.href = '/';
  // useEffect(() => {
  //   console.log(permissions);
  //   console.log(localStorage.getItem('permitions'));
  //   console.log('estoy entradoal props');
  // }, [username]);

  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
};

export default ProtectedRoute;
