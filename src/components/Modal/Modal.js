import {bindActionCreators} from "redux";
import {setModal} from "../../store/actions/authModalActions";
import {connect} from "react-redux";
import {useState} from "react";
import {Redirect} from "react-router-dom";

const Layout = ({ formInfo, setModal }) => {
    const [redirectBack, setRedirectBack] = useState(false);
    if (redirectBack)
        return (<Redirect to="/documents"/>)
    return (
        <div
            className="position-absolute w-100 d-flex justify-content-center align-content-center"
            style={{ top: 100, zIndex: 100 }}
        >
            <div
                className={
                    "card w-50 text-center"
                }
                style={{ maxHeight: 840 }}
            >
                <div className="card-header w-100" style={styles.inputLabel}>
                    Внимание
                </div>
                <div className="card-body">
                    Ваши изменения не сохранятся, вы хотите выйти?<br/>
                    <div className="btn btn-outline-danger m-2" style={{width: 100}}
                         onClick={()=> {
                             setRedirectBack(true);
                             setModal(false);
                         }}
                    >Да</div>
                    <div className="btn btn-outline-primary m-2 " style={{width: 100}}
                        onClick={()=>setModal(false)}
                    >Нет</div>
                </div>
            </div>
        </div>
    );
};


const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchProps = (dispatch) => bindActionCreators({
    setModal,
}, dispatch);

export const Modal = connect(
    mapStateProps,
    mapDispatchProps
)(Layout);

const styles = {
    inputLabel: { width: 220, fontWeight: "200", color: "#212529" },
};