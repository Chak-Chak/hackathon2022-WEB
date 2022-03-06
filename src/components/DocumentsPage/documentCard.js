import React, {useState} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {setSelectedDocumentId} from "../../store/actions/authModalActions";
import {Redirect} from "react-router-dom";

const DocumentCardLayout = ({ id, info, date, num, setSelectedDocumentId }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    if (isRedirect)
        return<Redirect to="/documents/edit"/>
    else
    return (
        <div className="card m-3" style={{ width: "22rem" }}>
            <div className="card-body">
                <h5 className="card-title">Контракт №{num}</h5>
                <div className="card-text">
                    <div className="h6">Дата создания: {date}</div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="bi bi-check-square"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            {true && (
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            )}
                        </svg>
                        Отдел организации закупок
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="bi bi-check-square"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            {true && (
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            )}
                        </svg>
                        Планово-экономический отдел
                    </div>
                </li>
            </ul>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between mb-2">
                    <a
                        className="btn btn-outline-primary"
                        style={{ width: "48%" }}
                        onClick={()=> {
                            setIsRedirect(true)
                            setSelectedDocumentId(id)
                        }}
                    >
                        Изменить
                    </a>
                    <a
                        href="#"
                        className="btn btn-outline-danger"
                        style={{ width: "48%" }}
                    >
                        Удалить
                    </a>
                </div>
                <div>
                    <a className="btn btn-outline-success w-100 mb-2" href={`http://cb94-204-157-128-236.ngrok.io/documents/download/${num}`}>
                        Скачать
                    </a>
                    <a className="btn btn-outline-success w-100 mb-2">
                        Отправить на почту
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchProps = (dispatch) => bindActionCreators({setSelectedDocumentId}, dispatch);

export const DocumentCard = connect(
    mapStateProps,
    mapDispatchProps
)(DocumentCardLayout);
