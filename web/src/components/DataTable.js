import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Settings from '../settings';
import AlertDialog from './AlertDialog';
import DialogForm from './DialogForm';
import Notification from './Notification';

// const API_URL = 'https://admin-panel-web-test.herokuapp.com/api';
const API_URL = 'http://localhost:3000/api';

const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort, columns } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columns && columns.map(row => (
                    <TableCell
                        key={row.id}
                        sortDirection={orderBy === row.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={createSortHandler(row.id)}
                        >
                            {row.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell align="center">
                    Acciones
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

function TableCells({ columns, item }) {
    return columns && columns.map(({ id, options }) => {
        return (
            <TableCell key={id}> 
                {options ? Settings[options.type ? options.type : 'types'][options.model].label[item[id]] : item[id]} 
            </TableCell>
        );
    });
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    title: {
        flexGrow: 1
    }
}));

function DataTable(props) {
    const { columns, endPoint, title } = props;
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentID, setCurrentID] = useState(null);
    const [dialogFormOpen, setDialogFormOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);
    const [openNotification, setOpenNotification] = useState(false);
    const [titleNotification, setTitleNotification] = useState(null);

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    }

    const handleFetchData = () => {
        fetch(`${ API_URL }/${ endPoint }`, { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setRows(res);
                console.log(res);
                // setOpenNotification(true);
                // setTitleNotification('Registros cargados');
            })
            .catch(err => {
                setOpenNotification(true);
                setTitleNotification('Error al cargar registros');
                console.log(err);
            });
    }

    const handleDeleteRow = () => {
        fetch(`${ API_URL }/${ endPoint }/${ currentID }`, { method: 'DELETE' })
            .then(() => {
                handleFetchData();
                setDialogOpen(false);
                setCurrentID(null);
                setOpenNotification(true);
                setTitleNotification('Registro eliminado');
            })
            .catch(err => {
                setOpenNotification(true);
                setTitleNotification('Error al borrar registro');
                console.log(err);
            });
    }

    const handleSaveRow = (data) => {
        fetch(`${ API_URL }/${ endPoint }`, { 
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                handleFetchData();
                setDialogFormOpen(false);
                setOpenNotification(true);
                setTitleNotification('Registro guardado');
            })
            .catch(err => {
                setOpenNotification(true);
                setTitleNotification('Error al guardar registro');
                console.log(err);
            });
    };
    
    const handleUpdateRow = (data) => {
        fetch(`${ API_URL }/${ endPoint }/${ currentData._id }`, { 
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                handleFetchData();
                setDialogFormOpen(false);
                setCurrentData(null);
                setOpenNotification(true);
                setTitleNotification('Registro actualizado');
            })
            .catch(err => {
                setOpenNotification(true);
                setTitleNotification('Error al actualizar registro');
                console.log(err);
            });
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        {title}
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={() => setDialogFormOpen(true)}> Agregar {title} +</Button>
                </Toolbar>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            columns={columns}
                        />
                        <TableBody>
                        {rows.length > 0 ? 
                            stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(row => {
                                    return (
                                        <TableRow
                                            hover
                                            key={row._id}
                                        >
                                            <TableCells columns={columns} item={row} />
                                            <TableCell align="center">
                                                <IconButton onClick={() => {
                                                    setCurrentData(row);
                                                    setDialogFormOpen(true);
                                                }}>
                                                    <EditIcon color="secondary" />
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    setCurrentID(row._id);
                                                    setDialogOpen(true);
                                                }}>
                                                    <DeleteIcon color="error" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }) 
                            :
                            <TableRow>
                                <TableCell colSpan={100} align="center">
                                    Sin datos
                                </TableCell>
                            </TableRow>
                        }
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <AlertDialog
                open={dialogOpen}
                handleClose={() => {
                    setDialogOpen(false);
                    setCurrentID(null);
                }}
                handleOk={() => handleDeleteRow()}
            />
            {
                dialogFormOpen &&
                <DialogForm
                    open={dialogFormOpen}
                    handleClose={() => {
                        setDialogFormOpen(false);
                        setCurrentData(null);
                    }}
                    handleOk={
                        currentData ?
                        (data) => handleUpdateRow(data) :
                        (data) => handleSaveRow(data)
                    }
                    title={title}
                    columns={columns}
                    data={currentData}
                />
            }
                <Notification
                    open={openNotification}
                    title={titleNotification}
                    handleClose={() => setOpenNotification(false)}
                />
        </div>
    );
}

export default DataTable;
