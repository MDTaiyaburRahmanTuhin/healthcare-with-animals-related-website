import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const PrivateRouth = ({ children, ...rest }) => {
    const { users, isLoading } = useAuth()
    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => users.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            >

            </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRouth;