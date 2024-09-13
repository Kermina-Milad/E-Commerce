import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useCallback } from 'react';

const ScrollToTop = () => {
    const trigger = useScrollTrigger({ threshold: 100,});
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, [])
    
    return (
        <Zoom in={trigger}>
            <Fab
            onClick={scrollToTop}
             size="small" variant="extended" sx={{
                position: 'fixed',                
                bottom: 33,
                right: 33,
            }} color="primary" aria-label="add">
            <KeyboardArrowUp fontSize="medium" />
      </Fab>
        </Zoom>
    );
}

export default ScrollToTop;
