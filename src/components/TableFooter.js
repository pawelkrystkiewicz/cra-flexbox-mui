import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

const defaultFooterStyles = {};

class MyTableFooter extends React.Component {
	render() {
		const { classes, changePage, count, changeRowsPerPage, rowsPerPage, page } = this.props;

		return (
			<TableFooter>
				<TableRow>
					<TablePagination
						count={count}
						page={page}
						rowsPerPage={rowsPerPage}
						// onChangeRowsPerPage={event => changeRowsPerPage(event.target.value)}
						onChangePage={(_, page) => changePage(page)}
					/>
				</TableRow>
			</TableFooter>
		);
	}
}
export default MyTableFooter;
