import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';

export default function CommonDialog({ handleClose, title, children, open }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Create Campaign
        </Button>
      </DialogActions>
    </Dialog>
  );
}
