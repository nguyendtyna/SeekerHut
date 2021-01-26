import React, { useState } from 'react';
import { Modal } from 'antd';
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddEntryButton() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}><AddCircleIcon fontSize="small"/></IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Application Information</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              id="name"
              placeholder="false"
              label="Date Applied"
              type="date"
              fullWidth
            />
            <TextField
              autoFocus
              id="name"
              label="Company"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              id="name"
              label="Role"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default AddEntryButton;