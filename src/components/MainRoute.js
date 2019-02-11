import React from 'react';
import NavBar from './NavBar';
import Table from './Table';
import Footer from './Footer';
import Status from './Status';
import Modal from './Modal';
import MuiTable from './MuiTable';
// import 'rc-steps/assets/index.css';
import '../Steps.scss';
import 'rc-steps/assets/iconfont.css';
import Steps from 'rc-steps';
const Main = () => (
	<div>
		<NavBar />
		<div>
			<Steps labelPlacement="vertical" current={3}>
				<Steps.Step title="Processed" />
				<Steps.Step title="Shipped" />
				<Steps.Step title="On route" />
				<Steps.Step title="Delivered" />
			</Steps>
		</div>
		<Table />
		<br/>
		{/* <MuiTable /> */}
		<Modal />
		<Footer />
	</div>
);

export default Main;
