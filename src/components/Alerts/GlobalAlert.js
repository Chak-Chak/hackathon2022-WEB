import React, {useEffect, useRef, useState} from "react";
import {useInterval} from "../Hooks/useInterval";
import "./styles.css";
const colorList = ["#6c757d",
    "#0d6efd",
    "#198754",
    "#ffc107",
    "#dc3545",
    "#32b0f6"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const GlobalAlert = ({id, header, body, removeFun}) => {
    const [imgColor, __] = useState(getRandomInt(0,4));
    const alert = useRef();
    const [timer, setTimer] = useState(0);
    const [_, setStyle] = useState();
    const [remove, isRemove] = useState(false);
    useEffect(() => {
        setStyle(1);
    }, [alert.current]);
    useEffect(() => {
        setTimeout(() => {
            removeFun(id);
        }, 8000);
        setTimeout(() => {
            isRemove(true);
        }, 5000);
    }, []);

    //if (timer >= 10) removeFun(id);
    useInterval(() => setTimer((prev)=> prev + 1), 1000)
    return (
        <div className={`toast show ${remove ? "toastOpacity" : ""}`}>
            <div className="toast-header">
                <div style={{height: 20, width: 20, background: colorList[imgColor], marginRight: 5, borderRadius: 4}}/>
                <strong className="me-auto">{header}</strong>
                <small>{timer} секунд назад</small>
                <button onClick={() => {removeFun(id)}} type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"/>
            </div>
            <div className="toast-body">
                {body}
            </div>
        </div>
    )
}