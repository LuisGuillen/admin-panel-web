import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog(props) {
    const { title, message, open, handleClose, handleOk } = props;

    const handleClickOk = handleOk;

    const handleClickCancel = handleClose;

    return (
        <div>
            <Dialog
                open={open || false}
                onClose={handleClose}
            >
                <DialogTitle>{title || 'Advertencia'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{message || '¿Está seguro de eliminar este registro?'}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancel} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClickOk} color="primary" autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;