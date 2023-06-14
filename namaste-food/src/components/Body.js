import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

const Body = () => {
	const [restaurantData, setRestaurantData] = useState(resList);
	// use state syntax is array destructuring, and is ewual to as this code below
	//  const arr = useState(resList);
	// const [listOfRestaurants, setListOfRestaurant] = arr;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
		);

		const json = await data.json();
		console.log(json?.data?.cards[2]?.data?.data?.cards);
		setRestaurantData(json.data.cards);
	};

	return (
		<div className="body">
			<div className="search">
				<button
					className="search-filter"
					onClick={() => {
						let filteredListRestaurant = restaurantData.filter(
							(res) => res.data.avgRating > 4,
						);
						setRestaurantData(filteredListRestaurant);
					}}
				>
					Filter Top Restaurant
				</button>
			</div>
			<div className="res-container">
				{restaurantData.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
