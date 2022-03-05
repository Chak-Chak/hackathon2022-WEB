import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import { AuthPage } from "../../Pages/AuthPage";
import { DocumentsPage } from "../../Pages/DocumentsPage";
import { CreateDocumentPage } from "../../Pages/CreateDocumentPage";
import { Alerts } from "../Alerts/AlertList";
import {
    updateGlobalAlertList,
    updateIsAuth,
} from "../../store/actions/authModalActions";

const NavbarLayout = ({ info, updateIsAuth, updateGlobalAlertList }) => {
    useEffect(() => {
        if (localStorage.getItem("accessToken") !== null) updateIsAuth(true);
    }, []);
    console.log(info);
    return (
        <div>
            <Router>
                {!info.isAuth && <Redirect to="/" />}
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                        <div className="container-fluid">
                            <a className="navbar-brand ">
                                <em>БыстрыйКонтракт</em>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            {info.isAuth && (
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        updateIsAuth(false);
                                        updateGlobalAlertList({
                                            id: Math.random(),
                                            header: "Уже уходите? :(",
                                            body: "До скорой встречи!",
                                        });
                                        return <Redirect to="/" />;
                                    }}
                                >
                                    Выход
                                </button>
                            )}
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
                    <Route path="/" render={({ match }) => <AuthPage />} />
                </Switch>
            </Router>
            <Alerts />
        </div>
    );
};

const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchProps = (dispatch) =>
    bindActionCreators({ updateIsAuth, updateGlobalAlertList }, dispatch);

export const Navbar = connect(mapStateProps, mapDispatchProps)(NavbarLayout);
