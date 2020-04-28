import React from 'react';

import './style.scss';
import Header from './header';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Header />
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
