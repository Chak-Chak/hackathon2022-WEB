import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {
    fetchCreateToken,
    isLoginValidationError,
    setLoginRole,
    setRequestLoginError,
    updateIsAuth
} from "../store/actions/authModalActions";
import {DangerAlert} from "../components/Alerts/DangerAlert";
import {LoginLoader} from "../UI/Loaders/loginLoader";

const AuthPageLayout = ({info, isLoginValidationError, fetchCreateToken, setLoginRole, updateIsAuth, setRequestLoginError}) => {
    const [password, setPassword] = useState('');
    const validate = () => {
        if ((info.userRole === null) || (password.trim() === ''))
        {
            //Ошибка ввода данных
            isLoginValidationError(true);
            setRequestLoginError(false);
        } else {
            isLoginValidationError(false);
            fetchCreateToken(info.userRole, password);
        }
    }
    if (info.isAuth) {
        return <Redirect to="/documents" />
    }
    return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: window.innerHeight-100}}>
            <div className="card w-25 p-3">
                <div className="card-body">
                    <h5 className="card-title">Авторизация</h5>
                    <div className="input-group mt-4">
                        <select className="form-select"
                                onChange={(e) => setLoginRole(e.target.value)}>
                            <option value={null}>Выберите пользователя</option>
                            <option value={1}>Куратор контракта</option>
                            <option value={2}>Отдел организации закупок</option>
                            <option value={3}>Планово-экономический отдел</option>
                        </select>
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <span className="input-group-text w-25">Пароль</span>
                        <input type="password" aria-label="First name" className="form-control" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {info.isLoginValidationError && <DangerAlert text='Некорректный ввод данных' fill='outlined'/>}
                    {info.requestLoginError && <DangerAlert text='Неверный пароль' fill='outlined'/>}
                    {info.isLoginLoading ?
                        <div className="d-flex justify-content-center mt-3">
                            <LoginLoader/>
                        </div> :
                        <button className="btn btn-outline-primary w-100 mt-1" onClick={() => validate()}>
                            Войти
                        </button>
                    }
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
        {isLoginValidationError, fetchCreateToken, setLoginRole, updateIsAuth, setRequestLoginError},
        dispatch
    );

export const AuthPage  = connect(
    mapStateProps,
    mapDispatchProps
)(AuthPageLayout);