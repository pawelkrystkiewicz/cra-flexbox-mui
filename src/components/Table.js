import React from 'react';
import MUIDataTable from 'mui-datatables';
import MuiTablePagination from './TableFooter';
import Status from './Status';
const Table = (props) => {
	const columns = [
		{
			name: 'Name',
			options: {
				filter: true,
				sort: true
			}
		},
		{
			name: 'Company',
			options: {
				filter: true,
				sort: false
			}
		},
		{
			name: 'City',
			options: {
				filter: true,
				sort: false
			}
		},
		{
			name: 'State',
			options: {
				filter: true,
				sort: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return <Status value={value} tableMeta={tableMeta} updateValue={updateValue} />;
				}
			}
		}
	];

	const data = [
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ],
		[ 'Joe James', 'Test Corp', 'Yonkers', 'NY' ],
		[ 'John Walsh', 'Test Corp', 'Hartford', 'CT' ],
		[ 'Bob Herm', 'Test Corp', 'Tampa', 'FL' ],
		[ 'James Houston', 'Test Corp', 'Dallas', 'TX' ]
	];

	const options = {
		filterType: 'checkbox'
		// 	customFooter: (
		// 		count,
		// 		page,
		// 		rowsPerPage,
		// 		changeRowsPerPage,
		// 		changePage
		// 	) => {
		// 		return (
		// 			<MuiTablePagination
		// 				changePage={changePage}
		// 				count={count}
		// 				page={page}
		// 				rowsPerPage={rowsPerPage}
		// 				changeRowsPerPage={changeRowsPerPage}
		// 			/>
		// 		);
		// 	}
	};

	return (
		<div className="table">
			<MUIDataTable title={'Employee List'} data={data} columns={columns} options={options} />
		</div>
	);
};

export default Table;
