import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LateralMenu from './LateralMenu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = (ev) => {
        setAnchorEl(ev.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleCloseMenu = () => {
        setOpenMenu(false);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpenMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Admin Web Panel
                    </Typography>
                    <div>
                        <IconButton
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Salir</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <LateralMenu open={openMenu} handleClose={handleCloseMenu} />
        </div>
    );
}

export default MenuAppBar;