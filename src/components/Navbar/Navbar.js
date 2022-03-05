import React, {useEffect} from "react";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import {AuthPage} from "../../Pages/AuthPage";
import {DocumentsPage} from "../../Pages/DocumentsPage";
import {CreateDocumentPage} from "../../Pages/CreateDocumentPage";

const NavbarLayout = ({info}) => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <a className="navbar-brand "><em>БыстрыйКонтракт</em></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route
                    path="/documents/create"
                    render={({ match }) => <CreateDocumentPage />}
                />
                <Route
                    path="/documents"
                    render={({ match }) => <DocumentsPage />}
                />
                <Route
                    path="/"
                    render={({ match }) => <AuthPage />}
                />
            </Switch>
        </Router>
    );
};

const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return {info};
};

const mapDispatchProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export const Navbar  = connect(
    mapStateProps,
    mapDispatchProps
)(NavbarLayout);