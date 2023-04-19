import { Drawer, Typography,Box } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";

function Drawerr() {

    const [isdraweropen, setisdraweropen] = useState(false)
    
    return (
        <>
            <MenuIcon size="large" edge='start' color='inherit' aria-label='logo' onClick={() => setisdraweropen(true)} />
            <Drawer anchor='left' open={isdraweropen} onClose={() => setisdraweropen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="6" component="div">Music</Typography>
                </Box>
        </Drawer>
        </>
    );
}

export default Drawerr;