import React from 'react';
import NavBar from './NavBar';
import Table from './Table';
import Footer from './Footer';
import Status from './Status';

const Main = () => (
	<div className="flex_container" >
		<NavBar />
		<Table />
		<Footer />
	</div>
);

export default Main;
