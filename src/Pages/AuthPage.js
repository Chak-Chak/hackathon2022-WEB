import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const AuthPageLayout = ({}) => {
    return (
        <div>
            ghghg
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

export const AuthPage  = connect(
    mapStateProps,
    mapDispatchProps
)(AuthPageLayout);