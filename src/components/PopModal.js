import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function PopModal({openPopup,setOpenPopup,handleClose}) {

    // const {openPopup , setPopup } = props;

    // const handleOpen = () => setPopup(true);
    // const handleClose = () => setPopup(false);
  

  return (
    <div>
        <Modal
        open={openPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      
          <Typography id="modal-modal-description" sx={{ mt: 3}}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <Button>Submit</Button>
          <Button>Cancle</Button>
          </Typography>
        </Box>
      </Modal>
      
    </div>
  )
}

export default PopModal;
