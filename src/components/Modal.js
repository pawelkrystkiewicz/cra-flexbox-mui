import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Context } from '../App';
import '../Steps.scss';
import 'rc-steps/assets/iconfont.css';
import Steps from 'rc-steps';
const DialogTitle = withStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit * 2
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing.unit,
		top: theme.spacing.unit,
		color: theme.palette.grey[500]
	}
}))((props) => {
	const { children, classes, onClose, context } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="Close" className={classes.closeButton} onClick={context.toggleModal}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing.unit * 2
	}
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		borderTop: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit
	}
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{(context) => (
					<div>
						<Dialog
							onClose={context.toogleModal}
							aria-labelledby="customized-dialog-title"
							open={context.state.modal}
						>
							<DialogTitle id="customized-dialog-title" onClose={context.toogleModal} contex={context}>
								Modal title
							</DialogTitle>
							<DialogContent>
								<Typography gutterBottom>
									Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
									facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
									vestibulum at eros.
								</Typography>
								<div>
									<Steps labelPlacement="vertical" current={3}>
										<Steps.Step title="Processed" />
										<Steps.Step title="Shipped" />
										<Steps.Step title="On route" />
										<Steps.Step title="Delivered" />
									</Steps>
								</div>
								<Typography gutterBottom>
									Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
									scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
									metus auctor fringilla.
								</Typography>
							</DialogContent>
							<DialogActions>
								<Button onClick={Context.toogleModal} color="primary">
									Save changes
								</Button>
							</DialogActions>
						</Dialog>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

export default CustomizedDialogDemo;
