import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
	const [restaurantData, setRestaurantData] = useState(resList);
	return (
		<div className="body">
			<div className="search">
				<button
					className="search-filter"
					onClick={() => {
						let filteredListRestaurant = restaurantData.filter(
							(res) => res.info.avgRating > 4,
						);
						setRestaurantData(filteredListRestaurant);
					}}
				>
					Filter Top Restaurant
				</button>
			</div>
			<div className="res-container">
				{restaurantData.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
