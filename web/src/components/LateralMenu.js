import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import CarIcon from '@material-ui/icons/DirectionsCar';
import PartIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

function LateralMenu({ open, handleClose}) {
	const classes = useStyles();

	const sideList = () => (
		<div
			className={classes.list}
			onClick={handleClose}
		>
			<List>
				<Link className='link' to="/Users">
					<ListItem button>
						<ListItemIcon>
							<UserIcon />
						</ListItemIcon>
						<ListItemText primary={'Usuarios'} />
					</ListItem>
				</Link>
				<Link className='link' to="/Cars">
					<ListItem button>
						<ListItemIcon>
							<CarIcon />
						</ListItemIcon>
						<ListItemText primary={'Autos'} />
					</ListItem>
				</Link>
				<Link className='link' to="/Parts">
					<ListItem button>
						<ListItemIcon>
							<PartIcon />
						</ListItemIcon>
						<ListItemText primary={'Partes'} />
					</ListItem>
				</Link>
			</List>
			<Divider />
		</div>
	);

	return (
		<Drawer open={open} onClose={handleClose}>
			{sideList()}
		</Drawer>
	);
}

export default LateralMenu;