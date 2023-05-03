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
			<img
				className="card-img"
				src="https://st.depositphotos.com/3147737/4947/i/600/depositphotos_49471133-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
				alt="food image"
			/>
			<h3>Meghna Food</h3>
			<h4>Asian, Briyani, Indian</h4>
			<p>4.3 Start</p>
			<p>30 min</p>
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
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
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
