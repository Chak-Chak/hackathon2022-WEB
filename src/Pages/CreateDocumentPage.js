import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const CreateDocumentPageLayout = ({info}) => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState('');


    const [charges, setCharges] = useState([]);
    const [charge, setCharge] = useState({name:'', units:'',number:'',cost:'',summary:''});
    console.log(charges)

    if (!info.isAuth)
        return <Redirect to="/"/>
    return (
        <div className="d-flex justify-content-center">
            <div className="card w-75">
                <div className="card-header text-center">
                    Форма контракта гражданско-правового характера на оказание услуг с физическими лицами
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">Регистрационный номер контакта</span>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">Дата заключениея контракта</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-25 d-flex justify-content-center">ФИО</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text w-100 d-flex justify-content-center rounded mb-1">Список оказываемых услуг</div>
                        <div className="d-flex flex-column w-100">
                            <div className="d-flex w-100 mb-1">
                                <input placeholder="Введите наименование услуги" value={service} onChange={(e)=>setService(e.target.value)} type="text" className="form-control rounded me-2" />
                                <div className="btn btn-outline-secondary" onClick={()=> {
                                    if (service.trim())
                                        setServices(prevState => prevState.concat({id: Math.random(), service}));
                                        setService('');
                                }}>Добавить</div>
                            </div>
                                {services.map((service, id)=>{
                                    return (
                                        <div className="d-flex align-items-center">
                                            <div className="input-group input-group-sm mb-1 d-flex align-items-center">
                                                <span className="input-group-text d-flex justify-content-center" style={{width: 30}}>{id+1}</span>
                                                <div className="form-control">{service.service}</div>
                                                <div className="btn-close ms-2" onClick={()=>{
                                                    setServices(prev=>prev.filter(serviceTmp=>serviceTmp.service !== service.service))
                                                }}/>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-50 text-wrap" style={{height: 75}}>
                            Основание заключения Контракта в соответствии с нормативно-правовым актами в сфере закупок
                        </span>
                        <textarea className="form-control text-wrap" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-50 text-wrap">
                            Общая цена Контракта с учетом всех расходов (в том числе взносов во внебюджетные фонды)
                        </span>
                        <input type="number" className="form-control text-wrap" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text w-100 d-flex justify-content-center rounded mb-1">Расходы, входящие в стоимость услуг</div>
                        <div className="d-flex flex-column w-100">
                            <div className="d-flex w-100 mb-1">
                                <input placeholder="Наименование"
                                       style={{width: 300}}
                                       value={charge.name}
                                       onChange={(e)=>setCharge(prev=>({...prev, name:e.target.value}))}
                                       type="text" className="form-control rounded me-2" />
                                <input placeholder="Ед. изм."
                                       style={{width: 100}}
                                       value={charge.units} onChange={(e)=>setCharge(prev=>({...prev, units:e.target.value}))}
                                       type="text" className="form-control rounded me-2" />
                                <input placeholder="Кол-во"
                                       style={{width: 100}}
                                       value={charge.number} onChange={(e)=>setCharge(prev=>({...prev, number:e.target.value}))}
                                       type="text" className="form-control rounded me-2" />
                                <input placeholder="Стоимость 1 ед., руб."
                                       style={{width: 200}}
                                       value={charge.cost} onChange={(e)=>setCharge(prev=>({...prev, cost:e.target.value}))}
                                       type="text" className="form-control rounded me-2" />
                                <input placeholder="Общая сумма, руб."
                                       style={{width: 200}}
                                       value={charge.summary} onChange={(e)=>setCharge(prev=>({...prev, summary:e.target.value}))}
                                       type="text" className="form-control rounded me-2" />
                                <div className="btn btn-outline-secondary" onClick={()=> {
                                    setCharges(prevState => prevState.concat({id: Math.random(), charge}));
                                    setCharge({name:'', units:'',number:'',cost:'',summary:''});
                                }}>Добавить</div>
                            </div>
                            {charges.map((charge)=>{
                                return (
                                    <div className="d-flex align-items-center mb-1">
                                        <div placeholder="Наименование"
                                             style={{width: 300}} className="form-control rounded me-2" >
                                            {charge.charge.name}
                                        </div>
                                        <div placeholder="Ед. изм."
                                               style={{width: 100}}
                                             className="form-control rounded me-2" >
                                            {charge.charge.units}
                                        </div>
                                        <div placeholder="Кол-во"
                                               style={{width: 100}}
                                             className="form-control rounded me-2" >
                                            {charge.charge.number}
                                        </div>
                                        <div placeholder="Стоимость 1 ед., руб."
                                               style={{width: 200}}
                                             className="form-control rounded me-2" >
                                            {charge.charge.cost}
                                        </div>
                                        <div placeholder="Общая сумма, руб."
                                             style={{width: 200}}
                                             className="form-control rounded me-2" >
                                            {charge.charge.summary}
                                        </div>
                                        <div className="btn-close ms-2" style={{width: 90}} onClick={()=>{
                                            setServices(prev=>prev.filter(serviceTmp=>serviceTmp.service !== service.service))
                                        }}/>
                                    </div>
                                )
                            })}
                        </div>
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