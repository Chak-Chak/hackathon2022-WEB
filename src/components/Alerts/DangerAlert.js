import { Alert } from "@mui/material";
import React from "react";
import {DANGER_COLOR} from "../../themes";

export const DangerAlert = ({ text, fill, wrapStyles, fontStyles }) => {
    return (
        <Alert
            style={{ marginBottom: 10, ...wrapStyles }}
            variant={fill}
            severity="error"
        >
            <div style={{ ...styles.text, ...fontStyles }}>{text}</div>
        </Alert>
    );
};

const styles = {
    text: {
        color: DANGER_COLOR,
        fontWeight: 200,
    },
};