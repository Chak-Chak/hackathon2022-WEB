import { Alert } from "@mui/material";
import React from "react";
import { SUCCESS_COLOR } from "../../themes";

export const SuccessAlert = ({ text, fill, wrapStyles, fontStyles }) => {
    return (
        <Alert
            style={{ marginBottom: 10, ...wrapStyles }}
            variant={fill}
            severity="info"
        >
            <div style={{ ...styles.text, ...fontStyles }}>{text}</div>
        </Alert>
    );
};

const styles = {
    text: {
        color: SUCCESS_COLOR,
        fontWeight: 200,
    },
};
