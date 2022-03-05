import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {DocumentCard} from "../components/DocumentsPage/documentCard";

const DocumentsPageLayout = ({info}) => {
    if (!info.isAuth)
        return <Redirect to="/"/>
    return (
        <div className="container">
            <DocumentCard />
        </div>
    )
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

export const DocumentsPage  = connect(
    mapStateProps,
    mapDispatchProps
)(DocumentsPageLayout);