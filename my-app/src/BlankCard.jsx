import React from "react";
import Box from "@mui/material/Box"

// place holder slots for team pokemon cards
const BlankCard = () => {
    return (
       <Box
       sx={{
        border: '3px dashed grey',
        width: 250,
        height: 350,
        borderRadius: 3,
        borderColor: "white"
        }}>
       </Box>
    )

};
export default BlankCard;
