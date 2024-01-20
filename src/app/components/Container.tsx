import React from "react";
import {
    Paper,
} from "@mui/material";


type Props = {
    children?: React.ReactNode;
};


const Container = ({ children }: Props) => {

    return (
        <Paper
            sx={{ p: "2rem", alignItems: "center", width: "600px", borderRadius: 0 }}
        >    {children}
        </Paper>
    );
};

export default Container;
