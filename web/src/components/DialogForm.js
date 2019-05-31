import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog(props) {
    const { open, title, columns, data, handleClose, handleOk } = props;

    const itemsDefaults = columns.reduce((object, { id }) => ({ ...object, [id]: data ? data[id] : '' }), {});
    const [items, setItems] = useState(itemsDefaults);

    const handleClickClose = handleClose;
    const handleClickOk = () => handleOk(items);

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >{title}</DialogTitle>
                <DialogContent>
                    {columns.map(({ id, label }, index) =>
                        <TextField
                            key={id}
                            margin="dense"
                            label={label}
                            onChange={ev => setItems({ ...items, [id]: ev.target.value })}
                            value={items[id] || ''}
                            fullWidth
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClickOk} color="primary">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;
