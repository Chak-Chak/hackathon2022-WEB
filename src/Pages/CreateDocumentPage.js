import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const CreateDocumentPageLayout = ({info}) => {
    if (!info.isAuth)
        return <Redirect to="/"/>
    return (
        <div className="d-flex justify-content-center">
            <div className="card w-50">
                <div className="card-header text-center">
                    Форма контракта гражданско-правового характера на оказание услуг с физическими лицами
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Регистрационный номер контакта</span>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </div>
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