import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const AuthPageLayout = ({info}) => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: window.innerHeight-100}}>
            <div className="card w-25 p-3">
                <div className="card-body">
                    <h5 className="card-title">Авторизация</h5>
                    <div className="input-group mt-4">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Выберите пользователя</option>
                            <option value="0">Куратор контракта</option>
                            <option value="1">Отдел организации закупок</option>
                            <option value="2">Планово-экономический отдел</option>
                        </select>
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <span className="input-group-text w-25">Пароль</span>
                        <input type="password" aria-label="First name" className="form-control"/>
                    </div>
                    <button className="btn btn-primary w-100">
                        Войти
                    </button>
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

export const AuthPage  = connect(
    mapStateProps,
    mapDispatchProps
)(AuthPageLayout);