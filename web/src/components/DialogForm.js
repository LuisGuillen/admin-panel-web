import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem } from '@material-ui/core';

function FormDialog(props) {
    const { open, title, columns, data, handleClose, handleOk } = props;

    const itemsDefaults = columns.reduce((object, { id }) => ({ ...object, [id]: data ? data[id] : '' }), {});
    const [items, setItems] = useState(itemsDefaults);
    const [error, setError] = useState(false);

    const handleClickClose = handleClose;
    const handleClickOk = () => {
        const itemsEmpty = columns.filter(object => object.required).filter(object => items[object.id] === '');
        
        itemsEmpty.length === 0 ?
            handleOk(items) :
            setError(true)
    }

    return (
        <div>
            <Dialog open={open || false} onClose={handleClose} >
                <DialogTitle >{title}</DialogTitle>
                <DialogContent>
                    {columns.map(({ id, label, type, options, required }, index) =>
                        <TextField
                            key={id}
                            margin="dense"
                            label={label}
                            onChange={ev => setItems({ ...items, [id]: ev.target.value })}
                            value={items[id] || ''}
                            type={type && 'number'}
                            fullWidth
                            select={options && true}
                            required={required}
                            error={required && error}
                        >
                            {options && options.values.map((option, index) =>
                                <MenuItem key={index} value={index + 1}>
                                    {option[index + 1]}
                                </MenuItem>
                            )}
                        </TextField>
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
