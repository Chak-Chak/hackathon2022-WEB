import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const DocumentCardLayout = ({info}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Контракт №12345</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="btn btn-primary">Редактировать</a>
                        <a href="#" className="btn btn-danger">Удалить</a>
                    </div>
                    <div >
                        <a href="#" className="btn btn-success w-100 mb-2">Скачать</a>
                        <a href="#" className="btn btn-success w-100">Отправить на почту</a>
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

export const DocumentCard  = connect(
    mapStateProps,
    mapDispatchProps
)(DocumentCardLayout);