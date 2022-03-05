import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const CreateDocumentPageLayout = ({info}) => {
    if (!info.isAuth)
        return <Redirect to="/"/>
    return (
        <div className="container">
            Create
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

export const CreateDocumentPage  = connect(
    mapStateProps,
    mapDispatchProps
)(CreateDocumentPageLayout);