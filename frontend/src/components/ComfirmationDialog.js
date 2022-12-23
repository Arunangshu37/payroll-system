import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Paper from '@mui/material/Paper';
// import Draggable from 'react-draggable';


// function PaperComponent(props) {
//     return (
//       <Draggable
//         handle="#draggable-dialog-title"
//         cancel={'[class*="MuiDialogContent-root"]'}
//       >
//         <Paper {...props} />
//       </Draggable>
//     );
//   }

 function ComfirmationDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
          
            {/* <Button variant="outlined" onClick={handleClickOpen}>
             Cancel
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                // PaperComponent={PaperComponent}
                // aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Yes
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to cancel the Appointment?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
               NO
                    </Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}

export default ComfirmationDialog