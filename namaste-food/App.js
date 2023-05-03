import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * 	-Logo
 * 	-Nav Items
 * Body
 * 	-Search
 * 	-RestaurantContainer
 * 		-RestaurantCard
 * Footer
 * 	-Footer
 * 	-Links
 * 	-Address
 * 	-Contact
 */

// Header component
const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<p className="logo">LOGO</p>
			</div>
			<div className="nav-item">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

// Restaurant Card Component
const RestaurantCard = () => {
	return (
		<div className="res-card">
			<h3>Meghna Food</h3>
		</div>
	);
};

// Body Component
const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<RestaurantCard />
			</div>
		</div>
	);
};

// App layout ccomponent
const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
