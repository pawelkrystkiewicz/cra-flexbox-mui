import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = (theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	chip: {
		margin: theme.spacing.unit
		// backgroundColor:"blue"
	}
});

function Status(props) {
	const Node = (props) => (
		<div>
			<center>
				<h5>{`${props.value}`}</h5>
			</center>
			<center>
				<h5>11-02-2019</h5>
			</center>
		</div>
	);
	let color = '#3498db';

	switch (props.value) {
		case `NY`:
			color = '#2ecc71';
			break;
		case `CT`:
			color = '#e67e22';
			break;
		case `FL`:
			color = '#9b59b6';
			break;
		case `TX`:
			color = '#3498db';
			break;
		default:
			color = '#3498db';
			break;
	}

	const { classes } = props;
	const icon = props.value === 'TX' ? <DoneIcon /> : <FaceIcon />;
	return (
		<div className={classes.root}>
			<Chip
				clickable
				label={<Node />}
				variant="outlined"
				icon={icon}
				style={{ borderColor: `${color}`, borderWidth: 2 }}
				className={classes.chip}
			/>
		</div>
	);
}

Status.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Status);
