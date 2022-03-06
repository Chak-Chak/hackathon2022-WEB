import React, {useEffect} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { DocumentCard } from "../components/DocumentsPage/documentCard";
import {fetchGetDocumentList} from "../store/actions/authModalActions";

const DocumentsPageLayout = ({ info, fetchGetDocumentList}) => {
    useEffect(() => {
        fetchGetDocumentList();
    }, []);
    if (!info.isAuth) {
        return <Redirect to="/" />;
    }
    return (
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <div
                className="d-flex justify-content-center m-3"
                style={{ width: "22rem" }}
            >
                <Link
                    to="/documents/create"
                    className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
                    style={{ width: 100, height: 100 }}
                >
                    Создать
                </Link>
            </div>
        </div>
    );
};

const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchProps = (dispatch) => bindActionCreators({
    fetchGetDocumentList,
}, dispatch);

export const DocumentsPage = connect(
    mapStateProps,
    mapDispatchProps
)(DocumentsPageLayout);
