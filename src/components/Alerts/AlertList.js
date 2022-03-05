import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeGlobalAlert } from "../../store/actions/authModalActions";
import { GlobalAlert } from "./GlobalAlert";

const AlertLayout = ({ info, removeGlobalAlert }) => {
    return (
        <div>
            <div className="toast-container position-absolute top-0 end-0 p-3 mt-5">
                {info.globalAlertList.map((alert) => (
                    <GlobalAlert
                        id={alert.id}
                        header={alert.header}
                        body={alert.body}
                        removeFun={removeGlobalAlert}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            removeGlobalAlert,
        },
        dispatch
    );
export const Alerts = connect(mapStateToProps, mapDispatchToProps)(AlertLayout);
