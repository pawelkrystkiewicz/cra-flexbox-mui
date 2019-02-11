import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import MuiTablePagination from './TableFooter';
import Status from './Status';

const data = [
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' },
	{ name: 'John Doe', company: 'BaTech Corpran', city: 'New York', state: 'NY' }
];

const Table = (props) => {
	const { defaultVisibleRows } = props;
	const [ page, setPage ] = useState(1);
	const [ visibleRows, setVisibleRows ] = useState(defaultVisibleRows || 30);
	const [ sorting, setSorting ] = useState(`State`);

	const Toolbar = () => {
		return (
			<span class="table__sorting">
				{`Sort by `}
				<select onChange={(e) => setSorting(e.target.value)} value={sorting}>
					<option value="State">State</option>
					<option value="City">City</option>
					<option value="Name">Name</option>
				</select>
			</span>
		);
	};

	function paginate(array, visibleRows, page) {
		page--; // because pages logically start with 1, but technically with 0
		return array.slice(page * visibleRows, (page + 1) * visibleRows);
	}
	const Pagination = (props) => {
		return (
			<div className="table__pagination">
				{` rows per page`}
				<span className="table_pagination--rows-per-page">
					<select
						onChange={(e) => {
							setVisibleRows(e.target.value);
							setPage(1);
						}}
						value={visibleRows}
					>
						<option value={30}>30</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select>
				</span>
				<div>{`Page ${page}`}</div>
				<span className="table__pagination--nav">
					<button disabled={page === 1} onClick={(e) => setPage(page - 1)}>
						{`<`}
					</button>
					<button disabled={data.length - visibleRows * page < 0} onClick={(e) => setPage(page + 1)}>
						{`>`}
					</button>
				</span>
			</div>
		);
	};
	let rows = paginate(data, visibleRows, page);
	console.log(rows);
	rows = rows.map(({ id, name, company, city, state }) => (
		<div key={id} className="row">
			<div className="column">{name}</div>
			<div className="column">{company}</div>
			<div className="column">{city}</div>
			<div className="column">{state}</div>
		</div>
	));

	return (
		<div className="table__main">
			<Toolbar />
			<div className="table__body">{rows}</div>
			<Pagination />
		</div>
	);
};

export default Table;
